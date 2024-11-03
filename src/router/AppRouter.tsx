import { HomePage } from '@/pages/HomePage';
import { ProfilePage } from '@/pages/ProfilePage';
import { Navigate, Route, Routes } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile/:id" element={<ProfilePage />} />

      <Route path="/*" element={<Navigate to={'/'} />} />
    </Routes>
  );
};
