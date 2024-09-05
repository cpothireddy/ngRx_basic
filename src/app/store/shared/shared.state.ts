export interface SharedState {
    showLoading: boolean;
    errorMessage: string;
}

export const initalState:SharedState = {
    showLoading: false,
    errorMessage:''
}