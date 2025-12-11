/**
 * Rive Animation Loader
 *
 * This script initializes and plays a Rive animation using the
 * @rive-app/canvas runtime loaded via CDN.
 */

// URL to the remote Rive animation file
const RIVE_FILE_URL = 'https://raw.githubusercontent.com/julianleiss/lucid-test/main/5132-10323-logo-interaction.riv';

/**
 * Initialize the Rive animation once all resources are fully loaded.
 * We use 'load' event instead of 'DOMContentLoaded' to ensure the
 * Rive runtime script has finished executing.
 */
window.addEventListener('load', () => {
    // Get reference to the canvas element where animation will render
    const canvas = document.getElementById('rive-canvas');

    /**
     * Create a new Rive instance with configuration options:
     *
     * - src: URL to the .riv file (loaded remotely)
     * - canvas: The HTML canvas element for rendering
     * - autoplay: Automatically start playing the animation on load
     * - fit: How the animation fits within the canvas bounds
     *        'contain' maintains aspect ratio while fitting entirely within canvas
     * - alignment: Where to position the animation within the canvas
     *              'center' places it in the middle
     */
    const riveInstance = new rive.Rive({
        src: RIVE_FILE_URL,
        canvas: canvas,
        autoplay: true,  // Start animation immediately after loading
        fit: rive.Fit.Contain,  // Fit animation within canvas bounds
        alignment: rive.Alignment.Center,  // Center the animation

        /**
         * onLoad callback fires when the Rive file has been loaded
         * and is ready for playback. Useful for debugging or triggering
         * additional logic after load.
         */
        onLoad: () => {
            console.log('Rive animation loaded successfully!');

            // Optionally resize the drawing surface to match canvas dimensions
            // This ensures crisp rendering at the correct resolution
            riveInstance.resizeDrawingSurfaceToCanvas();
        },

        /**
         * onLoadError callback fires if there's an issue loading the file.
         * Common issues: CORS errors, invalid URL, corrupted .riv file
         */
        onLoadError: (error) => {
            console.error('Failed to load Rive animation:', error);
        }
    });
});
