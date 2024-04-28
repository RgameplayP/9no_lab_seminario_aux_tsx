import React, { useEffect, useState } from 'react';
import { fetchRandomProduct } from '../../async/services/getData';
import { Product } from '../../types/Product';
import './Card.css';  

export const Card: React.FC = () => {
    
    const [product, setProduct] = useState<Product | null>(null);

    
    useEffect(() => {
        fetchRandomProduct().then((data) => {
            setProduct(data);
        });
    }, []);

    
    return (
        <div className="card">  {}
            {product && (
                <>
                    <p className="card-label">Titulo: <span className="card-value">{product.title}</span></p>
                    <p className="card-label">Descripción: <span className="card-value">{product.description}</span></p>
                    <p className="card-label">Precio USD$: <span className="card-value">{product.price}</span></p>
                    <p className="card-label">Marca: <span className="card-value">{product.brand}</span></p>
                </>
            )}
        </div>
    );
};
