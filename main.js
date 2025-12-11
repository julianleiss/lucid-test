/**
 * Rive Animation Loader
 * Uses @rive-app/canvas runtime from CDN
 */

const RIVE_FILE_URL = 'https://raw.githubusercontent.com/julianleiss/lucid-test/main/5132-10323-logo-interaction.riv';

window.addEventListener('load', () => {
    console.log('Page loaded, rive object:', typeof rive, rive);

    const canvas = document.getElementById('rive-canvas');

    // Create Rive instance
    const r = new rive.Rive({
        src: RIVE_FILE_URL,
        canvas: canvas,
        autoplay: true,
        onLoad: () => {
            console.log('Rive loaded!');
            // Log available animations and state machines
            console.log('Animations:', r.animationNames);
            console.log('State machines:', r.stateMachineNames);
            r.resizeDrawingSurfaceToCanvas();
            // Play first animation if autoplay didn't work
            r.play();
        },
        onLoadError: (e) => {
            console.error('Load error:', e);
        }
    });
});
