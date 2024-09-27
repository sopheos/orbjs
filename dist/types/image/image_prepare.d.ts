export interface ImagePrepareOptions {
    /**
     * File name
     * @default 'file'
     */
    name?: string;
    /**
     * Max File Size
     * @default 20971520
     */
    maxSize?: number;
    /**
     * Image AllowedTypes Format types MIME
     * @default ['image/jpeg', 'image/png']
     */
    allowedTypes?: Array<string>;
    /**
     * Image AllowedTypes Format types MIME
     * @default 'image/jpeg' | 'image/webp'
     */
    outputType?: string;
    /**
     * Compression quality of the jpeg conversion
     * @default 0.75
     */
    quality?: number;
    /** Max width of the image. If to big, image is resized */
    maxWidth?: number;
    /** Max height of the image. If to big, image is resized */
    maxHeight?: number;
    /** Min width of the image. If to small, throw an error */
    minWidth?: number;
    /** Min height of the image. If to small, throw an error */
    minHeight?: number;
    /**
     * If true, the max/min Width & Height are interchangeables for validation & resize.
     * @default true
     */
    orientationAllowed?: boolean;
}
export declare const imagePrepare: (blob: Blob, options: ImagePrepareOptions) => Promise<any>;
/**
 * Determines if webp is supported by the browser
 * @returns a promise resolving to a boolean to know if webp is supported
 */
export declare const isWebpSupported: () => Promise<Boolean>;
/**
 * Determines if webp convertion with canvas is supported by the browser
 * @returns a boolean to know if webp conversion is supported
 */
export declare const isWebpConvertionSupported: () => Boolean;
