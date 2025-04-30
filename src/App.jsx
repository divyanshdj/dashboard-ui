  import React from 'react';
  import Header from './components/Header';
  import Sidebar from './components/Sidebar';
  import ProjectHeader from './components/ProjectHeader';
  import FilterAndShare from './components/FilterAndShare';
  import Layout from './components/Layout';

  const App = () => {

    const handleSearchChange = (value) => {
      console.log('Search value:', value);
    };

    return (
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header onSearchChange={handleSearchChange} />
          <main className="flex flex-col items-center justify-center p-8">
            <ProjectHeader/>
            <FilterAndShare/>
          </main>
          <section className="flex flex-row py-8 px-12 mx-12 gap-2 items-center justify-between">
            <Layout content={"To Do"}/>
            <Layout content={"On Progress"}/>
            <Layout content={"Done"}/>
          </section>
        </div>
      </div>
    );
  };

  export default App;

