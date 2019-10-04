function useData() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const getData = () => {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        setHasError(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return [data, isLoading, hasError];
}
