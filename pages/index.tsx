import { useState } from 'react';

import Layout from 'components/Layout';
import CopyModal from 'components/CopyModal';
import Hits from 'components/Hits';

import Adfit from 'components/Adfit';
import OgTags from 'components/OgTags';

import MoonForm from 'components/MoonForm';
import { objectToQueryString } from 'utils/string';

function Home() {
  const [queryString, setQueryString] = useState('');

  const svgUrl = `/moon.svg${queryString}`;

  const handleFormChange = ({
    liveMode,
    dateString,
    size,
    theme,
    rotate,
  }: FormValues) => {
    const queryString = objectToQueryString({
      liveMode,
      date: liveMode ? '' : dateString,
      size,
      theme,
      rotate,
    });
    setQueryString(queryString);
  };

  return (
    <Layout>
      <OgTags />
      <p>SVG showing the Moon Phase for today.</p>
      <Hits />
      <a>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={svgUrl} alt="moon.svg" />
      </a>
      <MoonForm onChange={handleFormChange} />
      <CopyModal.Button id="copy-modal" />
      <CopyModal.Modal
        id="copy-modal"
        text={`https://moon-svg.minung.dev${svgUrl}`}
      />
      <Adfit />
    </Layout>
  );
}

export default Home;
