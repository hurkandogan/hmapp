import axiosGateway from '../axiosGateway';

export default function saveExpense(data) {
    return axiosGateway.post('/saveExpense', data);
}