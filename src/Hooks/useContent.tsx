import React, { useEffect, useState } from "react";
import axios from "axios";
import { BackendUrl } from "../config";

const useContent = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    async function fetchContent() {
      try {
        const response = await axios.get(BackendUrl + "/api/v1/content", {
          headers: {
            Authorization: localStorage.getItem("jwt"),
          },
        });

        console.log("API response:", response.data); // Debug

        // Ensure it's an array
        const data = Array.isArray(response.data)
          ? response.data
          : response.data.content || [];

        setContent(data);
      } catch (error) {
        console.error("Error fetching content:", error);
        setContent([]); // fallback to empty array
      }
    }

    fetchContent();
  }, []);

  return content;
};

export default useContent;
