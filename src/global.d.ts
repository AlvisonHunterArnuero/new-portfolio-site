// Augment the global Window interface
interface Window {
    // Declare the existence of the Buffer property
    Buffer: typeof import('buffer').Buffer;
}