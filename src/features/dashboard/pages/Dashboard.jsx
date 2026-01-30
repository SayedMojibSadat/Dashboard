import Aside from '../components/Aside';
import Header from '../components/Header';
import Content from '../components/Content';

function Dashboard() {
  return (
    <div className="h-screen w-full bg-neutral-900">
      <Header />
      <div className="h-8/9 w-full flex flex-row">
        <Aside />
        <Content />
      </div>
    </div>
  );
}

export default Dashboard;