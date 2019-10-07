import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from '@nestjs/common';
import * as _ from 'lodash';
import {validate} from 'class-validator';
import {plainToClass} from 'class-transformer';

@Injectable()
export class BodyParamValidationPipe implements PipeTransform {
    async transform(value: any, { metatype }: ArgumentMetadata) {
        // is enable javascript type
        if (this.isEmptyValue(metatype) || !this.toTypeValidate(metatype)) {
            return value;
        }
        // is empty value
        if (this.isEmptyValue(value) || this.isEmptyObjectValue(value)) {
            throw new BadRequestException('데이터가 비어있습니다.');
        }
        // validation
        const errors = await validate(plainToClass(metatype, value));
        if (this.isInvalid(errors)) {
            console.log(errors)
            throw new BadRequestException('데이터를 확인해주세요.');
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

    private buildError(errors) {
        const result = {};
        errors.forEach(el => {
            let prop = el.property;
            Object.entries(el.constraints).forEach(constraint => {
                result[prop + constraint[0]] = `${constraint[1]}`;
            });
        });
        return result;
    }
}
