import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from '@nestjs/common';
import * as _ from 'lodash';
import {validate} from 'class-validator';
import {plainToClass} from 'class-transformer';
import {ResultResponseConstant} from '../constants/result-response.constant';

@Injectable()
export class BodyParamValidationPipe implements PipeTransform {
    async transform(value: any, { metatype }: ArgumentMetadata) {
        // is enable javascript type
        if (this.isEmptyValue(metatype) || !this.toTypeValidate(metatype)) {
            return value;
        }
        // is empty value
        if (this.isEmptyValue(value) || this.isEmptyObjectValue(value)) {
            throw new BadRequestException(ResultResponseConstant.Message.EMPTY_PARAMS_ERROR, ResultResponseConstant.Error.EMPTY_PARAMS_ERROR);
        }
        // validation
        const errors = await validate(plainToClass(metatype, value));
        console.log(errors)
        if (this.isInvalid(errors)) {
            throw new BadRequestException(ResultResponseConstant.Message.INVALID_PARAMS_ERROR, ResultResponseConstant.Error.INVALID_PARAMS_ERROR);
        }
        return value;
    }

    private isInvalid(errors): boolean {
        return errors.length > 0;
    }

    private isEmptyValue(value): boolean {
        return _.isNil(value);
    }

    private isEmptyObjectValue(value): boolean {
        return Object.keys(value).length === 0;
    }

    private toTypeValidate(metaType): boolean {
        const types = [String, Boolean, Number, Array, Object];
        return !types.includes(metaType);
    }
}
