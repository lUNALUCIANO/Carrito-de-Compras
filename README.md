# 🛍️ MonnDistribuidora

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://react.dev/)  
[![React Router](https://img.shields.io/badge/React_Router-6.23.1-red?logo=react-router)](https://reactrouter.com/en/main)  
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-purple?logo=bootstrap)](https://getbootstrap.com/docs/)  
[![React-Bootstrap](https://img.shields.io/badge/React--Bootstrap-2.10.0-563d7c?logo=bootstrap)](https://react-bootstrap.github.io/getting-started/introduction)  
[![Firebase](https://img.shields.io/badge/Firebase-10.13.0-orange?logo=firebase)](https://firebase.google.com/docs?hl=es-419)  

---

## 📚 Tabla de Contenido

- [Descripción](#-descripción)  
- [Tecnologías utilizadas](#-tecnologías-utilizadas)  
- [Funcionalidades principales](#-funcionalidades-principales)  
- [Estructura básica del proyecto](#-estructura-básica-del-proyecto)  
- [Instalación y uso](#-instalación-y-uso)  
- [Documentación oficial](#-documentación-oficial)  
- [Roadmap / Futuras mejoras](#-roadmap--futuras-mejoras)  
- [Autor](#-autor)  

---

## 📜 Descripción

**MonnDistribuidora** es una aplicación **E-commerce** desarrollada en **React** que permite:

- Mostrar productos con nombre, imagen, stock y precio.  
- Filtrar productos por categorías.  
- Agregar productos al carrito.  
- Finalizar la compra con formulario.  
- Guardar la información de la compra en **Firebase Firestore**.  

---

## 🚀 Tecnologías utilizadas

Este proyecto fue desarrollado con las siguientes dependencias:

- [React](https://react.dev/)  
- [React DOM](https://react.dev/reference/react-dom)  
- [React Router](https://reactrouter.com/en/main)  
- [Bootstrap](https://getbootstrap.com/docs/)  
- [React-Bootstrap](https://react-bootstrap.github.io/getting-started/introduction)  
- [Firebase](https://firebase.google.com/docs?hl=es-419)  

---

## 📌 Funcionalidades principales

✅ Mostrar catálogo de productos con:  
 • Nombre  
 • Imagen  
 • Stock  
 • Precio  

✅ Filtro por categorías.  
✅ Agregar productos al carrito.  
✅ Visualizar cantidad y subtotal en el carrito.  
✅ Eliminar productos del carrito.  
✅ Vaciar carrito.  
✅ Finalizar compra mediante formulario.  
✅ Guardar pedidos en **Firebase Firestore**.  
✅ Navbar con navegación entre secciones.  
✅ Página de detalle de producto.  
✅ Barra de búsqueda para productos.  
✅ Mensajes de confirmación y validación.  
✅ Diseño responsive (Bootstrap).  

---

## 📂 Estructura básica del proyecto

src/
├── components/ # Componentes reutilizables (Navbar, ItemList, Cart, ProductDetail, etc.)
├── context/ # Context API (Carrito, Autenticación si aplica)
├── db/ # Configuración de Firebase
├── pages/ # Páginas principales (Home, Categorías, Checkout)
├── App.jsx # Componente principal
└── main.jsx # Punto de entrada