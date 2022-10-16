export const useForm = (fieldValue) => {
    const emptyField = (fieldValue) => {
        return fieldValue.length === 0 ? 0 : fieldValue.length;
    }
    

    return {
        emptyField
    }
}