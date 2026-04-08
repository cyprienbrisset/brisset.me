/**
 * Global type augmentations.
 *
 * Importing @react-three/fiber triggers its module augmentation for the JSX
 * namespace, which adds <mesh>, <torusKnotGeometry>, etc. to JSX.IntrinsicElements.
 * Without this side-effect import the build fails with:
 *   "Property 'mesh' does not exist on type 'JSX.IntrinsicElements'"
 */
import "@react-three/fiber";
