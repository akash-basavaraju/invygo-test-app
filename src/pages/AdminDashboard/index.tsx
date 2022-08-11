import { useDeferredValue, useEffect, useMemo, useState } from "react";
import Loader from "../../components/Loader";
import APIService from "../../services/APIService";
import IRegistrationType from "../../types/IRegistrationType";
import casmelToPascal from "../../utils/Utils";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const [fetchedData, setFetchedData] = useState<IRegistrationType[]>();
  const [searchText, setSearchText] = useState<string>();
  const deferredSearchText = useDeferredValue(searchText);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const deferedIsModelOpen = useDeferredValue(isModalOpen);
  const [selectedObject, setSelectedObject] = useState<IRegistrationType>();

  useEffect(() => {
    const getData = async () => {
      const data = await APIService.getRegistrations();
      setFetchedData(data);
    };

    getData();
  }, []);

  const filteredData = useMemo(() => {
    if (deferredSearchText && fetchedData) {
      return fetchedData.filter((data) => {
        return (
          data.name.toLowerCase().includes(deferredSearchText.toLowerCase()) ||
          data.locality.toLowerCase().includes(deferredSearchText.toLowerCase())
        );
      });
    }
    return fetchedData;
  }, [fetchedData, deferredSearchText]);

  if (!fetchedData) {
    return <Loader />;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-searchbar">
        <div className="dashboard-searchlabel">Search:</div>
        <div className="dashboard-search-input-container">
          <input
            className="dashboard-search-input"
            value={searchText}
            placeholder="Search Here..."
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="dashboard-cards">
        {filteredData?.map((data) => {
          const { name, locality } = data;

          return (
            <div
              className="dashboard-card"
              onClick={() => {
                setSelectedObject(data);
                setIsModalOpen(true);
              }}
            >
              <div className="dashboard-card-name">{name}</div>
              <div className="dashboard-card-locality">{locality}</div>
            </div>
          );
        })}
      </div>
      <div
        className={`modal-container ${
          deferedIsModelOpen ? "modal-show" : "modal-hidden"
        }`}
      >
        <div className={`modal-contents`}>
          <div className="modal-header">Registration Details</div>
          <div className="modal-details">
            {selectedObject &&
              Object.keys(selectedObject).map((key) => {
                return (
                  <div className="modal-values">
                    <div className="modal-key">{casmelToPascal(key)}:</div>
                    <div className="modal-value">
                      {selectedObject && selectedObject[key]}
                    </div>
                  </div>
                );
              })}
          </div>
          <div>
            <button
              className="modal-close"
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
