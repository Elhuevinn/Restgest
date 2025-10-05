// ===================================
// DENTRO DE TU COMPONENTE DE LOGIN (ej: src/app/login/page.js)
// ===================================
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Para redirigir en la app router
import { login } from '@/app/services/authService'; 

function LoginComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const token = await login({ username, password });
      
      console.log("Token recibido:", token);
      alert('¡Login exitoso! Redirigiendo...');
      
      // Redirige al usuario a la página principal o dashboard
      router.push('/dashboard'); 

    } catch (error) {
      console.error(error);
      alert('Error: Credenciales incorrectas o problemas de conexión.');
    }
  };

  // ... JSX del formulario de login ...
  
  return (
    <form onSubmit={handleLogin}>
      {/* ... campos de username y password ... */}
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
}

export default LoginComponent;