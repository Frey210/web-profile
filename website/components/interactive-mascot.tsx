"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useInView } from "framer-motion";
import { registeredCelClip, registeredCelFrame } from "@/lib/vendor/hanging-cels.mjs";
import styles from "./interactive-mascot.module.css";
import intro from "@/lib/visitor-intro.json";
import sprites from "@/lib/visitor-sprites.json";
import { MessageCircle, Settings2, Pause, Play, EyeOff } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type Pose = "seat" | "hang" | "sleep" | "floor" | "left" | "right" | "upside" | "crouch" | "music-seat" | "music-floor" | "neutral";
type Location = { x: number; y: number; pose: Pose };
const actions: Record<Pose, string[]> = { seat: ["ledge-keytar"], hang: ["hang-pullup", "hang-catch", "hang-wrist-scan", "ledge-peek-below"], sleep: [], floor: [], left: [], right: [], upside: [], crouch: [], "music-seat": [], "music-floor": [], neutral: ["wave", "intro"] };
const poses: Record<Pose, { file: string; label: string }> = {
  seat: { file: "seat.png", label: "Sit on edge" }, hang: { file: "hang.png", label: "Hang / pull-ups" }, sleep: { file: "sleep.png", label: "Sleep" },
  floor: { file: "poses/capri-sit-floor.png", label: "Sit on floor" }, left: { file: "poses/capri-dock-left.png", label: "Left wall" }, right: { file: "poses/capri-dock-right.png", label: "Right wall" },
  upside: { file: "poses/capri-ceiling-upside-down.png", label: "Hang upside down" }, crouch: { file: "poses/capri-crouch.png", label: "Crouch" },
  "music-seat": { file: "music/capri-music-window.png", label: "Headphones / edge" }, "music-floor": { file: "music/capri-music-floor.png", label: "Headphones / floor" }, neutral: { file: "neutral.png", label: "Stand / expressions" },
};
const replies = ["Hey! I was getting comfortable.", "You're trouble. I like that.", "Fine. One little performance."];
const lightning = "M95 8 83 34 108 49 77 70 102 93 81 120 112 147 88 170 103 200 91 234 M108 49 145 35 130 64 170 81 M77 70 43 87 58 113 25 132 M112 147 151 132 135 164 171 187 M88 170 49 180 64 204 35 229";

export function InteractiveMascot({ companion = false }: { companion?: boolean }) {
  const path = usePathname();
  const host = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const visible = useInView(host);
  const [reduced, setReduced] = useState(true);
  const [paused, setPaused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [homeVisible, setHomeVisible] = useState(path === "/");
  const [location, setLocation] = useState<Location | null>(null);
  const [action, setAction] = useState("");
  const [performance, setPerformance] = useState(0);
  const [reply, setReply] = useState(-1);
  const [error, setError] = useState(false);
  const [travel, setTravel] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [selectedPose, setSelectedPose] = useState<Pose | null>(null);
  const [expression, setExpression] = useState("capri-neutral.png");
  const [chat, setChat] = useState(false);
  const [chatText, setChatText] = useState("");
  const [chatMessages, setChatMessages] = useState<string[]>([]);
  const [departure, setDeparture] = useState<{ x: number; y: number; width: number } | null>(null);
  const imageCache = useRef(new Map<string, HTMLImageElement>());
  const interacting = useRef(0);
  const anchor = useRef<{ element: Element; side: "left" | "right" } | null>(null);
  const drag = useRef<{ x: number; y: number; left: number; top: number; moved: boolean } | null>(null);
  const pose = chat ? "seat" : selectedPose ?? location?.pose ?? (companion ? "neutral" : "seat");
  const running = !hidden && !paused && !reduced && !dismissed && (companion ? !homeVisible || chat : visible);
  const choosePose = (next: Pose) => { anchor.current = null; interacting.current = Date.now(); setSelectedPose(next); setAction(""); setPerformance(value => value + 1); };
  const interact = () => {
    interacting.current = Date.now();
    setReply(value => (value + 1) % replies.length);
    setAction(actions[pose][Math.floor(Math.random() * actions[pose].length)] ?? "");
    setPerformance(value => value + 1);
  };

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const update = () => setHidden(document.hidden);
    update();
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  useEffect(() => {
    if (!companion) return;
    const hero = document.querySelector("[data-mascot-home]");
    if (path !== "/" || !hero) { setHomeVisible(false); return; }
    const observer = new IntersectionObserver(([entry]) => setHomeVisible(entry.isIntersecting));
    observer.observe(hero);
    return () => observer.disconnect();
  }, [companion, path]);

  useEffect(() => {
    if (reply < 0) return;
    const timer = window.setTimeout(() => setReply(-1), 4500);
    return () => window.clearTimeout(timer);
  }, [reply]);

  useEffect(() => {
    if (!travel) return;
    const timer = window.setTimeout(() => { setTravel(false); setDeparture(null); }, 650);
    return () => window.clearTimeout(timer);
  }, [travel]);

  useEffect(() => {
    if (!running || dragging) return;
    const timer = window.setTimeout(() => {
      const typing = document.activeElement?.matches("input, textarea, select, [contenteditable=true]");
      if (typing || host.current?.querySelector("details[open]") || Date.now() - interacting.current < 10000) { setPerformance(value => value + 1); return; }
      if (!chat && (!companion || anchor.current) && (pose === "seat" || pose === "music-seat") && Math.random() < .45) {
        setSelectedPose(pose === "seat" ? "music-seat" : "seat");
        setAction("");
        setPerformance(value => value + 1);
        return;
      }
      if (pose === "neutral") {
        const choices = sprites.sprites.filter(entry => entry.kind === "expression");
        setExpression(choices[Math.floor(Math.random() * choices.length)].file);
      }
      const choices = actions[pose];
      setAction(choices[Math.floor(Math.random() * choices.length)] ?? "");
      setPerformance(value => value + 1);
    }, 9000 + Math.random() * 6000);
    return () => window.clearTimeout(timer);
  }, [running, dragging, pose, performance, chat, selectedPose, companion]);

  useEffect(() => {
    if (action !== "wave" || !running) return;
    const timer = window.setTimeout(() => setAction(""), 3500);
    return () => window.clearTimeout(timer);
  }, [action, performance, running]);

  useEffect(() => {
    if (!chat) return;
    setTravel(false);
    setDeparture(null);
    setAction("");
    const timer = window.setTimeout(() => host.current?.querySelector<HTMLInputElement>("input")?.focus(), 0);
    return () => window.clearTimeout(timer);
  }, [chat]);

  useEffect(() => {
    if (!companion || !running || dragging || chat) return;
    let scrollFrame = 0;
    const width = () => host.current?.querySelector("canvas")?.getBoundingClientRect().width ?? 200;
    const perch = (element: Element, side: "left" | "right"): Location | null => {
      if (!element.isConnected) return null;
      const rect = element.getBoundingClientRect();
      const w = width();
      const x = (side === "right" ? rect.right - 32 : rect.left + 32) - w * .518;
      const y = rect.top - w * 773 / 1254;
      if (rect.width < w || x < 8 || x + w > window.innerWidth - 8 || y < 88 || y + w > window.innerHeight - 100) return null;
      const hit = document.elementFromPoint(x + w * .518, rect.top + 8);
      if (hit && !element.contains(hit) && !host.current?.contains(hit)) return null;
      // Keep legs and body clear of forms and interactive content.
      const blocked = Array.from(document.querySelectorAll("main input, main textarea, main select, main button, main a"))
        .some(control => { const r = control.getBoundingClientRect(); return r.width > 0 && r.left < x + w * .82 && r.right > x + w * .18 && r.top < y + w && r.bottom > y + w * .12; });
      return blocked ? null : { x, y, pose: "seat" };
    };
    const move = () => {
      if (host.current?.querySelector("details[open]") || Date.now() - interacting.current < 12000 || document.activeElement?.matches("input, textarea, select, [contenteditable=true]")) return;
      const candidates = Array.from(document.querySelectorAll("main article, main figure, main .glass-panel, main [data-visitor-perch]"))
        .filter(element => { const css = getComputedStyle(element); return css.borderTopStyle !== "none" && parseFloat(css.borderTopWidth) > 0; })
        .flatMap(element => (["left", "right"] as const).map(side => ({ element, side, point: perch(element, side) })))
        .filter(candidate => candidate.point);
      const target = candidates[Math.floor(Math.random() * candidates.length)];
      if (!target?.point) return;
      const old = host.current?.getBoundingClientRect();
      if (old) setDeparture({ x: old.left, y: old.top, width: old.width });
      setSelectedPose(null);
      anchor.current = { element: target.element, side: target.side };
      setLocation(target.point);
      setTravel(true);
      setAction("");
    };
    const timer = window.setInterval(move, 22000);
    const first = window.setTimeout(move, 2000);
    const follow = () => {
      if (scrollFrame) return;
      scrollFrame = requestAnimationFrame(() => {
        scrollFrame = 0;
        if (!anchor.current) return;
        const point = perch(anchor.current.element, anchor.current.side);
        if (!point) { anchor.current = null; setSelectedPose(null); setLocation(null); setAction(""); return; }
        setLocation(point);
      });
    };
    window.addEventListener("scroll", follow, { passive: true });
    window.addEventListener("resize", follow);
    return () => { window.clearInterval(timer); window.clearTimeout(first); cancelAnimationFrame(scrollFrame); window.removeEventListener("scroll", follow); window.removeEventListener("resize", follow); };
  }, [companion, running, dragging, chat, path]);

  useEffect(() => { anchor.current = null; setLocation(null); setSelectedPose(null); setAction(""); }, [path]);

  useEffect(() => {
    const context = canvas.current?.getContext("2d");
    if (!context) return;
    if (companion && (homeVisible || dismissed) && !chat) return;
    let cancelled = false;
    let frame = 0;
    let lastCell = "";
    const images = new Map<string, HTMLImageElement>();
    const load = async (file: string) => {
      const cached = imageCache.current.get(file);
      if (cached) { images.set(file, cached); return cached; }
      const image = new window.Image();
      image.src = `/visitor/${file.replace(/\.png$/, ".webp")}`;
      await image.decode();
      if (imageCache.current.size >= 16) imageCache.current.clear();
      imageCache.current.set(file, image);
      if (!cancelled) images.set(file, image);
      return image;
    };
    const paint = async () => {
      try {
        const original = await load(pose === "neutral" ? `expressions/${expression}` : poses[pose].file);
        if (cancelled) return;
        setError(false);
        const drawOriginal = () => { context.clearRect(0, 0, 512, 512); context.drawImage(original, 0, 0, 512, 512); if (canvas.current) { canvas.current.dataset.frame = "rest"; canvas.current.dataset.pose = pose; } };
        drawOriginal();
        if (canvas.current) canvas.current.dataset.action = action;
        if (!running || !action) return;
        if (action === "intro") {
          const frames = await Promise.all(intro.frames.map(entry => load(`intro/${entry.file.replace("PNG/", "")}`)));
          if (cancelled) return;
          const start = window.performance.now();
          const tick = (now: number) => {
            if (cancelled) return;
            const elapsed = now - start;
            let until = 0;
            const index = intro.frames.findIndex(entry => { until += entry.ms; return elapsed < until; });
            if (index < 0) { drawOriginal(); return; }
            if (lastCell !== String(index)) { context.clearRect(0, 0, 512, 512); context.drawImage(frames[index], 0, 0, 512, 512); lastCell = String(index); if (canvas.current) canvas.current.dataset.frame = `intro:${index}`; }
            frame = requestAnimationFrame(tick);
          };
          frame = requestAnimationFrame(tick);
          return;
        }
        const clip = registeredCelClip(action);
        if (!clip) return;
        const asset = action === "ledge-peek-below" ? "hang-pullup" : action;
        await Promise.all([load(`${asset}.webp`), ...(asset === "hang-wrist-scan" ? [] : [load(`${asset}-breakdowns.webp`)])]);
        if (cancelled) return;
        const start = window.performance.now();
        const tick = (now: number) => {
          if (cancelled) return;
          const elapsed = now - start;
          if (elapsed >= clip.durationMs) { drawOriginal(); return; }
          const cell = registeredCelFrame(action, elapsed);
          const key = cell ? `${cell.asset}:${cell.cell}` : "rest";
          if (key !== lastCell) {
            if (cell) {
              const atlas = images.get(`${cell.asset}.webp`);
              if (atlas) { context.clearRect(0, 0, 512, 512); context.drawImage(atlas, cell.cell % 3 * 512, Math.floor(cell.cell / 3) * 512, 512, 512, 0, 0, 512, 512); }
            } else drawOriginal();
            lastCell = key;
            if (canvas.current) canvas.current.dataset.frame = key;
          }
          frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      } catch { if (!cancelled) setError(true); }
    };
    void paint();
    return () => { cancelled = true; cancelAnimationFrame(frame); images.clear(); };
  }, [pose, action, performance, running, expression, companion, homeVisible, dismissed, chat]);

  return (
    <div ref={host} className={`${styles.stage} ${companion ? styles.companion : styles.home} ${chat ? styles.chatHost : ""}`} data-mascot-home={companion ? undefined : ""} data-hidden={companion && ((homeVisible && !chat) || dismissed)} data-running={running} data-travel={travel && running} data-dragging={dragging} data-pose={pose} style={companion && location && !chat ? { left: location.x, top: location.y, right: "auto", bottom: "auto" } : undefined}
      onPointerDown={event => {
        interacting.current = Date.now();
        if (!companion || chat || !(event.target as Element).closest("[data-character]")) return;
        const rect = event.currentTarget.getBoundingClientRect();
        drag.current = { x: event.clientX, y: event.clientY, left: rect.left, top: rect.top, moved: false };
        event.currentTarget.setPointerCapture(event.pointerId);
      }}
      onPointerMove={event => {
        if (!drag.current) return;
        const dx = event.clientX - drag.current.x, dy = event.clientY - drag.current.y;
        if (Math.abs(dx) + Math.abs(dy) < 6 && !drag.current.moved) return;
        drag.current.moved = true;
        anchor.current = null;
        setDragging(true);
        setLocation({ x: Math.max(0, Math.min(window.innerWidth - event.currentTarget.offsetWidth, drag.current.left + dx)), y: Math.max(0, Math.min(window.innerHeight - event.currentTarget.offsetHeight, drag.current.top + dy)), pose });
      }}
      onPointerUp={event => {
        if (!drag.current) return;
        if (!drag.current.moved) interact();
        drag.current = null;
        setDragging(false);
        event.currentTarget.releasePointerCapture(event.pointerId);
      }} onPointerCancel={() => { drag.current = null; setDragging(false); }}>
      {(!companion || reply >= 0) && <p className={styles.speech} aria-live="polite">{reply >= 0 ? replies[reply] : "You're curious. Good. Pick something interesting."}</p>}
      <button type="button" data-character className={styles.character} aria-label="Interact with digital visitor" onClick={event => { if (!companion || event.detail === 0) interact(); }}>
        <canvas ref={canvas} width={512} height={512} role="img" aria-label="Pink-haired digital visitor performing animated gestures" />
        {action === "wave" && running && <Image unoptimized width={512} height={512} key={performance} src="/visitor/wave.webp" className={styles.wave} alt="Digital visitor waving" />}
        {pose.startsWith("music") && running && <span className={styles.notes} aria-hidden="true">{["01-eighth-cyan", "02-beamed-lime", "03-quarter-pink", "04-sixteenth-violet"].map((note, index) => <Image unoptimized width={64} height={64} key={note} src={`/visitor/music/${note}.webp`} alt="" style={{ animationDelay: `${index * .6}s`, left: `${30 + index * 12}%` }} />)}</span>}
        {error && <span className={styles.error}>Character artwork unavailable.</span>}
      </button>
      {!companion && <div className={styles.ledge} aria-hidden="true" />}
      <div className={styles.controls}>
        <button className={styles.chatTrigger} type="button" aria-expanded={chat} onClick={() => { setChat(value => !value); interacting.current = Date.now(); }}><MessageCircle size={15} />{chat ? "Close chat" : "Ask about Fariz"}</button>
        <details className={styles.settings}><summary aria-label="Visitor settings"><Settings2 size={15} /></summary><div>
          <button type="button" onClick={() => setPaused(value => !value)} aria-pressed={paused}>{paused ? <Play size={14} /> : <Pause size={14} />}{paused ? "Resume motion" : "Pause motion"}</button>
          {companion && <button type="button" onClick={() => setDismissed(true)}><EyeOff size={14} />Hide visitor</button>}
        </div></details>
      </div>
      {process.env.NODE_ENV === "development" && <details className={styles.actions} onToggle={() => { interacting.current = Date.now(); }}>
        <summary>Poses & actions</summary>
        <label>Pose<select aria-label="Visitor pose" value={pose} onChange={event => choosePose(event.target.value as Pose)}>{Object.entries(poses).map(([key, value]) => <option key={key} value={key}>{value.label}</option>)}</select></label>
        <div>{actions[pose].map(clip => <button type="button" key={clip} onClick={() => { setAction(clip); setPerformance(value => value + 1); interacting.current = Date.now(); }}>{clip.replaceAll("-", " ")}</button>)}</div>
        {pose === "neutral" && <label>Expression<select aria-label="Visitor expression" value={expression} onChange={event => setExpression(event.target.value)}>{sprites.sprites.filter(entry => !entry.file.includes("/")).map(entry => <option key={entry.id} value={entry.file}>{entry.label}</option>)}</select></label>}
        <button type="button" onClick={() => { const rect = host.current?.getBoundingClientRect(); if (rect) setDeparture({ x: rect.left, y: rect.top, width: rect.width }); setTravel(true); }}>Preview teleport</button>
      </details>}
      {chat && <section className={styles.chat} aria-label="Portfolio chat preview" onKeyDown={event => { if (event.key === "Escape") { setChat(false); host.current?.querySelector<HTMLButtonElement>('[aria-expanded]')?.focus(); } }}>
        <header><strong>Got questions?</strong><button type="button" aria-label="Close portfolio chat" onClick={() => setChat(false)}>Close</button></header>
        <p className={styles.notice}>Preview only. AI replies are not connected yet. Messages stay in this tab and are not sent to a server.</p>
        <div className={styles.messages} role="log" aria-live="polite"><p>Curious about Fariz? Start with his work or experience.</p>{chatMessages.map((text, index) => <p key={index}>{text}</p>)}</div>
        <nav aria-label="Learn about Fariz"><Link href="/projects">Projects</Link><Link href="/experience">Experience</Link><Link href="/contact">Contact</Link></nav>
        <form onSubmit={event => { event.preventDefault(); const text = chatText.trim(); if (!text) return; setChatMessages(value => [...value.slice(-18), text, "Message kept in this preview. For now, explore the links above or contact Fariz directly."]); setChatText(""); }}><label htmlFor={companion ? "visitor-question" : "hero-question"}>Your question</label><div><input id={companion ? "visitor-question" : "hero-question"} maxLength={1000} value={chatText} onChange={event => setChatText(event.target.value)} placeholder="What has Fariz built?" /><button type="submit" disabled={!chatText.trim()}>Send</button></div></form>
      </section>}
      {travel && running && <svg className={styles.lightning} viewBox="0 0 200 240" aria-hidden="true"><path d={lightning} /></svg>}
      {departure && travel && running && <svg className={`${styles.lightning} ${styles.departure}`} style={{ left: departure.x, top: departure.y, width: departure.width }} viewBox="0 0 200 240" aria-hidden="true"><path d={lightning} /></svg>}
      {dismissed && <button type="button" className={styles.restore} onClick={() => setDismissed(false)}>Show visitor</button>}
    </div>
  );
}
