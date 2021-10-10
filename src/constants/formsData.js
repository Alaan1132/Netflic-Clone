export const errorMessages = {
  email: 'El email es obligatorio',
  emailOrNumber: 'Ingresa un email o un número de teléfono válido.',
  password: 'La contraseña debe tener entre 4 y 60 caracteres.',
};

export const expressions = {
  user: /^[a-zA-Z0-9\\-]{4,16}$/,
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  password: /^.{4,12}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phone: /^\d{7,14}$/,
};
