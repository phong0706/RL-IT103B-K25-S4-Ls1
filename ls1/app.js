// GIẢI THÍCH 2 LỖI LOGIC:
// 1. Lỗi Off-by-one: Điều kiện vòng lặp (cupIndex < orderQuantity) khiến vòng lặp dừng sớm 1 nhịp. Nếu orderQuantity = 3, vòng lặp chỉ chạy khi cupIndex là 1 và 2. Cách sửa: Đổi thành cupIndex <= orderQuantity.
// 2. Lỗi phạm vi giảm giá: Khối lệnh kiểm tra thẻ Gold (isGoldMember) bị đặt bên trong vòng lặp for. Điều này làm cho tổng tiền bị chiết khấu chồng chéo nhiều lần (mỗi lần lặp lại nhân 0.9). Cách sửa: Chuyển khối lệnh if này ra ngoài vòng lặp.

const drinkName = "Phin Sữa Đá";
const basePrice = 29000;
const drinkSize = "M";
const toppingsPerCup = 2;
const orderQuantity = 3;
const isGoldMember = true;
const toppingPrice = 8000;

let sizeUpcharge = 0;
if (drinkSize === "M") sizeUpcharge = 6000;
else if (drinkSize === "L") sizeUpcharge = 10000;

const singleCupPrice = basePrice + sizeUpcharge + (toppingsPerCup * toppingPrice);

let totalBill = 0;

for (let cupIndex = 1; cupIndex <= orderQuantity; cupIndex++) {
  totalBill += singleCupPrice;
}

if (isGoldMember) {
  totalBill = totalBill * 0.9;
}

console.log("Tổng thanh toán:", totalBill, "VNĐ");