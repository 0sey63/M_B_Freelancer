import { Routes, Route } from 'react-router-dom';
import FreelancerLayout from './layouts/FreelancerLayout';
import Dashboard from './pages/Dashboard';
import ProfileServices from './pages/ProfileServices';
import ProposalsOrders from './pages/ProposalsOrders';
import ChatWorkspace from './pages/ChatWorkspace';
import CreateProposal from './pages/CreateProposal';
import ProjectsList from './pages/ProjectsList';
import ProjectWorkspace from './pages/ProjectWorkspace';
import Earnings from './pages/Earnings';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FreelancerLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="profile-services" element={<ProfileServices />} />
        <Route path="proposals" element={<ProposalsOrders />} />
        <Route path="chat/:id" element={<ChatWorkspace />} />
        <Route path="chat/:id/create-proposal" element={<CreateProposal />} />
        <Route path="projects" element={<ProjectsList />} />
        <Route path="projects/:id" element={<ProjectWorkspace />} />
        <Route path="earnings" element={<Earnings />} />
        {/* Future routes will go here */}
      </Route>
    </Routes>
  );
}

export default App;
