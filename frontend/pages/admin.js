import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const AdminPage = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [token, setToken] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        // Implement login logic here to set the token
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/products', {
                name,
                description,
                price,
                imageUrl,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data);
            // Optionally redirect or show success message
        } catch (error) {
            console.error('Error posting product:', error);
        }
    };

    return (
        <div>
            <h1>Admin Page</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Token"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Product Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Product Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    required
                />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AdminPage;