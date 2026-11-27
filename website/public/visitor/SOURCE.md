# Source and rights

Artwork and animation sheets sourced from:
https://github.com/CapriChooms/CapriCore
Commit: c50c6463637f31ee9109669be2dbee27e972e45d

The original animation timeline is retained in lib/vendor/hanging-cels.mjs,
under GPL-3.0-only. Full license: lib/vendor/CapriCore-LICENSE.txt.
Matching upstream source: https://github.com/CapriChooms/CapriCore/tree/c50c6463637f31ee9109669be2dbee27e972e45d

Upstream identifies the wave and registered cel actions as community contributions.
See ARTWORK-NOTICE.md. These are unofficial fan assets. The application code
license does not grant character, artwork, trademark or voice rights.
Separate permission for public redistribution/commercial use has not been verified.

No new AI-generated assets are included. sprite-gen was inspected and installed
in an isolated tooling environment; generation was deferred by the site owner.

Additional runtime artwork: all eight poses-v2 PNGs, 28 v1 expression
frames, seven intro-v1 frames (timings in lib/visitor-intro.json), and six music
artworks (two headphone poses and four note particles). Runtime sprite metadata
is retained in lib/visitor-sprites.json. Walking and generation-only references
are deliberately excluded, matching upstream's runtime asset boundary.

Web optimization: static PNG derivatives resized proportionally to at most
768 × 768 and encoded as quality-90 WebP. Composition and alpha preserved;
upstream PNG hashes in metadata describe originals, not these derivatives.
Animation atlases and animated wave retain their original files/timing.

Web teleport uses new SVG branched linework at departure and arrival; it is not
the full Electron lightning/Sandevistan renderer. Headphone artwork is a held
pose with animated music particles, not a newly generated body-motion clip.
The portfolio chat is explicitly a local UI preview, with no AI service or
network submission. Add server-side AI only with verified profile context,
rate limiting, secret handling and an explicit privacy policy.
