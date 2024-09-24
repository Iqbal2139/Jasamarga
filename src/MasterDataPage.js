import React, { useState } from 'react';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

function MasterDataPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  // Sample data for demonstration
  const [data, setData] = useState([
    { no: 1, ruas: "Ruas A", gerbang: "Gerbang 1" },
    { no: 2, ruas: "Ruas B", gerbang: "Gerbang 2" },
    { no: 3, ruas: "Ruas C", gerbang: "Gerbang 3" },
    { no: 4, ruas: "Ruas D", gerbang: "Gerbang 4" },
    { no: 5, ruas: "Ruas E", gerbang: "Gerbang 5" },
  ]);

  const handleView = (item) => {
    setSelectedItem(item);  // Set the selected item
    setIsEditMode(false);   // Set the modal to view mode
    setModalOpen(true);     // Open the modal
  };

  const handleEdit = (item) => {
    setSelectedItem(item);  // Set the selected item
    setIsEditMode(true);    // Set the modal to edit mode
    setModalOpen(true);     // Open the modal
  };

  const handleCancel = () => {
    setModalOpen(false);    // Close the modal
  };

  const handleSave = () => {
    if (isEditMode && selectedItem) {
      const updatedData = data.map((d) =>
        d.no === selectedItem.no ? selectedItem : d
      );
      setData(updatedData);
      alert('Data updated successfully!');
    } else {
      alert('Viewing mode');
    }
    setModalOpen(false);    // Close the modal after saving or viewing
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedItem({ ...selectedItem, [name]: value });
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow bg-gray-100">
        <Navbar />
        <div className="p-6 overflow-y-auto">
          <h2 className="text-3xl font-bold mb-4">Master Data</h2>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">No</th>
                  <th className="py-3 px-6 text-left">Ruas</th>
                  <th className="py-3 px-6 text-left">Gerbang</th>
                  <th className="py-3 px-6 text-left">Aksi</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {data.map(item => (
                  <tr key={item.no} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6">{item.no}</td>
                    <td className="py-3 px-6">{item.ruas}</td>
                    <td className="py-3 px-6">{item.gerbang}</td>
                    <td className="py-3 px-6">
                      <button 
                        className="text-blue-500 hover:underline"
                        onClick={() => handleView(item)}
                      >
                        <FaEye className="inline mr-1" /> View
                      </button>
                      <button 
                        className="text-blue-500 hover:underline ml-4"
                        onClick={() => handleEdit(item)}
                      >
                        <FaEdit className="inline mr-1" /> Edit
                      </button>
                      <button 
                        className="text-red-500 hover:underline ml-4"
                        onClick={() => {
                          if (window.confirm(`Are you sure you want to delete ${item.ruas} at ${item.gerbang}?`)) {
                            const updatedData = data.filter(d => d.no !== item.no);
                            setData(updatedData);
                            alert(`Deleted: ${item.ruas} at ${item.gerbang}`);
                          }
                        }}
                      >
                        <FaTrash className="inline mr-1" /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg w-1/3 p-6">
            <h2 className="text-xl font-bold mb-4">
              {isEditMode ? 'Edit Data' : 'View Data'}
            </h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Ruas:</label>
              <input 
                type="text" 
                name="ruas" 
                value={selectedItem?.ruas} 
                disabled={!isEditMode} 
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${isEditMode ? 'border-gray-300' : 'border-gray-100'} rounded-md ${!isEditMode ? 'bg-gray-100' : ''}`} 
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Gerbang:</label>
              <input 
                type="text" 
                name="gerbang" 
                value={selectedItem?.gerbang} 
                disabled={!isEditMode} 
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${isEditMode ? 'border-gray-300' : 'border-gray-100'} rounded-md ${!isEditMode ? 'bg-gray-100' : ''}`} 
              />
            </div>
            <div className="flex justify-end">
              <button 
                className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={handleCancel}
              >
                Batal
              </button>
              <button 
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={handleSave}
              >
                {isEditMode ? 'Simpan' : 'Tutup'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MasterDataPage;
