import React, { useState } from 'react';

import { Button } from '../components/Button';
import PlusIcons from '../icons/PlusIcons';
import ShareIcon from '../icons/ShareIcon';
import Card from '../components/Card';
import CreateContentModal from '../components/CreateContentModal';
import SideBar from '../components/SideBar';
import useContent from '../Hooks/useContent';

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const content= useContent();

  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <div className="w-64 fixed top-0 left-0 h-full">
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-6 space-y-6 h-min-screen bg-gray-100">
        <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)} />

        <div className="flex justify-end gap-4">
          <Button
            onClick={() => setModalOpen(true)}
            variant="primary"
            text="Add Content"
            startIcon={<PlusIcons />}
          />
          <Button
            variant="secondary"
            text="Share Brain"
            startIcon={<ShareIcon />}
          />
        </div>

        <div className="flex flex-wrap gap-4">
          {content.map(({type, link ,title}) => (
            <Card  type={type} link={link} title={title} />
          ))}

          {/* Example Cards */}
          {/* <Card
            type="youtube"
            link="https://youtu.be/TZW6D9jhgb4?si=UzO-l7p4-fGHLh9P"
            title="YouTube Education"
          />
          <Card
            type="twitter"
            link="https://x.com/Politicx2029/status/1947340703945601027"
            title="Tweet Example"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
