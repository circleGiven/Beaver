import {registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface} from 'class-validator';

export function IsValueEqual(property: string,  validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [property],
            validator: IsValueEqualDecorator,
        });
    };
}

@ValidatorConstraint({name: 'IsValueEqual'})
export class IsValueEqualDecorator implements ValidatorConstraintInterface {
    validate(value: any, validationArguments: ValidationArguments): Promise<boolean> | boolean {
        const [relatedPropertyName] = validationArguments.constraints;
        const relatedValue = (validationArguments.object as any)[relatedPropertyName];
        return value === relatedValue;
    }

}
