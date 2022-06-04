export namespace Validations {
  export const validateText = (text: string): boolean => text.length > 3;
  export const validateDate = (date: Date): boolean => !isNaN(date.valueOf());
}

export namespace Validations2 {
  export const validateText = (text: string): boolean => text.length > 3;
  export const validateDate = (date: Date): boolean => !isNaN(date.valueOf());
}
