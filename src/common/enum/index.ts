export enum Roles {
  SUPERADMIN = 'superadmin',
  ADMIN = 'admin',
  CUSTOMER = 'customer',
  SELLER = 'seller',
  MANAGER = 'manager',
}

export enum Gender {
  MALE = 'male',
  FIMALE = 'fimale',
}

export enum Status {
  PAID = 'paid',
  UNPAID = 'unpaid',
}

export enum Payment_type {
  CARD = 'card',
  CASH = 'cash',
}

export enum Raiting {
  WORST = 1,
  BAD = 2,
  NORMAL = 3,
  GOOD = 4,
  VERY_GOOD = 5,
}

export enum OrderStatus {
  PENDING = 'PENDING', // Yangi buyurtma
  PREPARING = 'PREPARING', // Tayyorlanmoqda
  READY = 'READY', // Tayyor
  CANCELED = 'CANCELED', // Bekor qilingan
}

export enum NotificationType {
  ORDER = 'ORDER', // Buyurtma haqida bildirishnoma
  WARNING = 'WARNING', // Ogohlantirish (masalan, to‘lov muvaffaqiyatsiz)
  REMINDER = 'REMINDER', // Eslatma (masalan, rezervatsiya yaqinlashmoqda)
  REVIEW = 'REVIEW', // Fikr-mulohaza yozishni so‘rash
  PAYMENT = 'PAYMENT', // To‘lov bilan bog‘liq xabar
}
