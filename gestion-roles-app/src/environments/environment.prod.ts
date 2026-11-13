// Configuración para desarrollo (ionic serve).
// La clave "publishable" es PÚBLICA: puede ir en el frontend porque la seguridad
// la ponen las políticas RLS de la base de datos.
export const environment = {
  production: false,
  supabaseUrl: 'https://YOUR-PROJECT.supabase.co',
  supabaseKey: 'YOUR_PUBLISHABLE_KEY',
};