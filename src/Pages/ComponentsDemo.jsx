import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Button,
  Input,
  Modal,
  Loader,
  showToast,
} from "../components/ui";

function ComponentsDemo() {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <Navbar />

      <main className="flex-grow max-w-5xl mx-auto p-6">

        <h1 className="text-4xl font-bold text-green-700 mb-8">
          UI Component Library Demo
        </h1>

        {/* Buttons */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Buttons
          </h2>

          <div className="flex gap-4 flex-wrap">
            <Button variant="primary">
              Primary
            </Button>

            <Button variant="secondary">
              Secondary
            </Button>

            <Button variant="outline">
              Outline
            </Button>
          </div>
        </section>

        {/* Input */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Input
          </h2>

          <Input
            label="Name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </section>

        {/* Modal */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Modal
          </h2>

          <Button onClick={() => setModalOpen(true)}>
            Open Modal
          </Button>

          <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            title="StaySense Modal"
          >
            <p>
              This is a reusable modal component.
            </p>
          </Modal>
        </section>

        {/* Toast */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Toast Notification
          </h2>

          <Button
            onClick={() =>
              showToast("Toast notification works!")
            }
          >
            Show Toast
          </Button>
        </section>

        {/* Loader */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Loader
          </h2>

          <Loader />
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default ComponentsDemo;