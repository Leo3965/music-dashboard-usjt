import { useEffect, useState } from "react";
import Tale from "./Tale";

export default function Wiki() {
  const [wiki, setWiki] = useState([]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    const fetchWiki = async () => {
      await fetch(
        "https://en.wikipedia.org/w/rest.php/v1/search/page?q=earth&limit=1"
      )
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          const wikiResult = json.pages[0].excerpt;
          const find = `<span class="searchmatch">Earth</span>`;
          const regex = new RegExp(find, "g");
          const wikiResultFormated = wikiResult.replace(regex, "");
          setWiki(capitalizeFirstLetter(wikiResultFormated));
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    fetchWiki();
  }, [wiki]);

  return <Tale title="Wiki">{wiki}</Tale>;
}
