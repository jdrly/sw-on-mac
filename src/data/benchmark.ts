// SWTOR's "Telemetry — median FPS" block in the #swtor section. Not measured yet: while
// `measured` is false the site labels the numbers "Sample data". Replace the values here and
// set `measured: true` once there are real numbers (same Mac, same scene, both apps).

export const benchmark = {
  measured: false,
  /** Median FPS with the official SWTOR Mac app */
  official: 31,
  /** Median FPS with SWTOR on Mac */
  swtorOnMac: 60,
  /** One line under the numbers */
  note: 'Same Mac, same scene.',
};
