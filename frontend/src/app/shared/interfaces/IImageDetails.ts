// Define an interface called ImageDetails to represent the structure of image-related data.
export interface ImageDetails {
    currentImageSrc?: string | ArrayBuffer; // Stores the source or data URL of the current image.
    currentImageFile?: File; // Stores the File object of the current image.
    afterImageSrc?: string | ArrayBuffer; // Stores the source or data URL of the after image.
    afterImageFile?: File; // Stores the File object of the after image.
    begCount?: number; // Represents a count related to the image details (e.g., a counter).
}

// Define an initialImageDetails constant that provides initial values for ImageDetails.
export const initialImageDetails: ImageDetails = {
    currentImageSrc: '', // Initialize currentImageSrc with an empty string.
    currentImageFile: {} as File, // Initialize currentImageFile as an empty File object.
    afterImageSrc: '', // Initialize afterImageSrc with an empty string.
    afterImageFile: {} as File, // Initialize afterImageFile as an empty File object.
    begCount: 0, // Initialize begCount to 0.
}
