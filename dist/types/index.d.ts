import { Geo } from "./geo";
import { FileUpload } from "./upload/file";
import { ImageUpload } from "./upload/image";
import { dateTimeFormatAgo } from "./format_helpers/date_format";
import { numberFormat } from "./format_helpers/number_format";
import { units } from "./format_helpers/number_format";
import { builder } from "./opening_hour/builder";
import { parser } from "./opening_hour/parser";
import { Schedules } from "./opening_hour/schedules";
import { removeWhitespaces } from "./rules/whitespaces";
declare const _default: {
    geo: {
        Geo: typeof Geo;
    };
    image: {
        imagePrepare: (blob: Blob, options: import("./image/prepare").ImagePrepareOptions) => Promise<any>;
        isWebpSupported: () => Promise<Boolean>;
        isWebpConversionSupported: () => Boolean;
    };
    upload: {
        FileUpload: typeof FileUpload;
        ImageUpload: typeof ImageUpload;
    };
    format_helpers: {
        dateTimeFormatAgo: typeof dateTimeFormatAgo;
        numberFormat: typeof numberFormat;
        units: typeof units;
    };
    opening_hour: {
        builder: typeof builder;
        parser: typeof parser;
        Schedules: typeof Schedules;
    };
    rules: {
        removeWhitespaces: typeof removeWhitespaces;
    };
    lang: {
        errors: (data: import("./lang/errors").NestedSchemas) => {
            getEnvErrors: (env: string, extra: import("./lang/errors").arrayObject) => {
                [key: string]: {
                    [key: string]: string;
                };
            };
            getError: (status: string, code: string) => {
                code: string;
                message: string;
            };
            getErrors: (env: string, errors: import("./lang/errors").arrayObject, extra: import("./lang/errors").arrayObject) => any;
        };
        generic: (data: import("./lang/generic").Generic) => import("./lang/generic").Generic;
    };
};
export default _default;
