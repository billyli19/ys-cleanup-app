export interface ImageDetails {
    currecntImageSrc?: string | ArrayBuffer;
    currecntImageFile?: File;
    afterImageSrc?: string | ArrayBuffer;
    afterImageFile?: File;
    begCount?: number;
}


export const initialImageDetails: ImageDetails = {
    currecntImageSrc: '',
    currecntImageFile: {} as File,
    afterImageSrc: '',
    afterImageFile: {} as File,
    begCount: 0,
}
