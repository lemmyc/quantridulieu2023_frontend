import moment from 'moment';

export const formatSoTienPhat = (value) => {
    return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(value);
}

export const formatTrangThaiPhat = (value) => {
    switch (value) {
        case "paid":
            return "Đã thanh toán";
        case "unpaid":
            return "Chưa thanh toán";
        default:
            break;
    }
}

export const formatTrangThaiMuon = (value) => {
    switch (value) {
        case "borrowing":
            return "Đang mượn";
        case "on_time":
            return "Trả đúng hạn";
        case "overdue":
            return "Trễ hạn";
        case "damaged":
            return "Hư hại";
        case "lost":
            return "Thất lạc";
        default:
            break;
    }
}

export const formatDate = (value) => {
    return value ? moment(value).format('DD-MM-YYYY HH:mm:ss') : value;
}
