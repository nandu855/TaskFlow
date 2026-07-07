import { useEffect, useMemo, useState } from "react";
import api from "../api/axios";
import type { Task } from "../types/task";

export function useDashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  async function loadTasks() {
    try {
      setLoading(true);

      const res = await api.get("/tasks");

      setTasks(res.data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  const filteredTasks = useMemo(() => {
    let data = [...tasks];

    if (filter !== "All") {
      data = data.filter(
        (t) => t.status === filter
      );
    }

    if (search) {
      data = data.filter((t) =>
        t.title
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    return data;
  }, [tasks, search, filter]);

  return {
    tasks,
    filteredTasks,
    loading,
    loadTasks,
    search,
    setSearch,
    filter,
    setFilter,
  };
}