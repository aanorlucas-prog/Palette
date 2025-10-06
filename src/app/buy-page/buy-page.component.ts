import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  price: number;
}

@Component({
  selector: 'app-buy-page',
  standalone: true,
    imports: [
    MatDialogModule,
    CommonModule

  ],
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.css'],
})
export class BuyPageComponent {
   cartVisible = false;
 products: Product[] = [
  {
    id: 1,
    title: "Séjour Bali",
    description: "Découverte des plages et temples de Bali.",
    image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/c7/d1/d1.jpg", // plage Bali
    link: "https://www.example.com/bali",
    price: 799
  },
  {
    id: 2,
    title: "Aventure au Costa Rica",
    description: "Explorez la nature sauvage du Costa Rica.",
    image: "https://images.squarespace-cdn.com/content/v1/674b9c056ec79e26669c04c3/8e62243e-4ec9-4726-85e1-2ee8ba71bcad/IMG_2897.jpeg", // jungle Costa Rica
    link: "https://www.example.com/costarica",
    price: 1099
  },
  {
    id: 3,
    title: "Visite du Japon",
    description: "Immersion culturelle et modernité au Japon.",
    image: "https://media.tacdn.com/media/attractions-splice-spp-360x240/0a/91/da/46.jpg", // ville Japon (Tokyo de nuit)
    link: "https://www.example.com/japan",
    price: 1299
  },
  {
  id: 4,
  title: "Aventure en Égypte",
  description: "Découvrez les pyramides, le Nil et la richesse historique de l'Égypte.",
  image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg", // pyramide de Gizeh
  link: "https://www.example.com/egypt",
  price: 999
}
  
];

  cart: Product[] = [];
  

  addToCart(product: Product): void {
    if (!this.cart.find(p => p.id === product.id)) {
      this.cart.push(product);
      alert(`${product.title} ajouté au panier !`);
    } else {
      alert(`${product.title} est déjà dans le panier.`);
    }
  }

  removeFromCart(product: Product): void {
    this.cart = this.cart.filter(p => p.id !== product.id);
  }

  get totalPrice(): number {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }

  goBack(): void {
    window.history.back();
  }

  toggleCart(): void {
    this.cartVisible = !this.cartVisible;
  }
}