"use client";

import { useEffect, useState } from "react";
import { AddNewAnnouncement, getSchoolAnnouncement } from "./action";
export default function AnnouncementPage() {
  const [announcements, setAnnouncements] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(announcements, "iniii");
  async function data() {
    try {
      const newdata = await getSchoolAnnouncement();
      console.log(newdata);
      const AnnouncementData = newdata.data;
      setAnnouncements(AnnouncementData);
    } catch (error) {}
  }

  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    content: "",
  });

  const handleInputChange = (e) => {
    setNewAnnouncement({ ...newAnnouncement, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toISOString().split("T")[0];
    setAnnouncements([
      ...announcements,
      { ...newAnnouncement, id: Date.now(), date },
    ]);
    setNewAnnouncement({ title: "", content: "", class: "" });
    setIsModalOpen(false);
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div className="bg-white rounded-2xl p-10 w-full ml-4 overflow-y-auto overflow-x-auto">
      <h1 className="text-xl font-bold mb-4">Announcements</h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
      >
        New Announcement
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 ">
                Add New Announcement
              </h3>
              <form action={AddNewAnnouncement} className="space-y-4">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium mb-1"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    className="w-full px-3 py-2 border-[0.1px] border-neutral-600 border-input bg-white rounded-md "
                  />
                </div>
                <div>
                  <label
                    htmlFor="content"
                    className="block text-sm font-medium mb-1"
                  >
                    Content
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    required
                    className="w-full px-3 py-2 border-[0.1px] border-neutral-500 border-input bg-white rounded-md "
                    rows={3}
                  />
                </div>

                <div className="flex justify-end space-x-2 mt-6">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border border-input rounded-md text-sm font-medium "
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-700 text-white rounded-md text-sm font-medium hover:bg-primary/90"
                  >
                    Add Announcement
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className="border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="py-3 px-4 text-left font-medium text-muted-foreground">
                Date
              </th>
              <th className="py-3 px-4 text-left font-medium text-muted-foreground">
                Title
              </th>
              <th className="py-3 px-4 text-left font-medium text-muted-foreground">
                Content
              </th>
              <th className="py-3 px-4 text-left font-medium text-muted-foreground">
                Class
              </th>
            </tr>
          </thead>
          <tbody>
            {announcements.map((announcement, index) => (
              <tr
                key={announcement.id}
                className={index % 2 === 0 ? "bg-background" : "bg-muted/50"}
              >
                <td className="py-3 px-4 border-t">{announcement.date}</td>
                <td className="py-3 px-4 border-t">{announcement.title}</td>
                <td className="py-3 px-4 border-t">{announcement.content}</td>
                <td className="py-3 px-4 border-t">{announcement.class}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
