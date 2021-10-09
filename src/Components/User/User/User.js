import React from 'react';
import { Routes, Route } from 'react-router-dom';

import UserHeader from '../UserHeader/UserHeader';
import Feed from '../../Feed/Feed/Feed';
import UserPhotoPost from '../UserPhotoPost/UserPhotoPost';
import UserStats from '../UserStats/UserStats';
import { UserContext } from '../../../UserContext';
import NotFound from '../../NotFound/NotFound';
import Head from '../../Helper/Head/Head';

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <Head title="Minha Conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
