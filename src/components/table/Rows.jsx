export default function Row({ musics }) {
  return (
    <tbody>
      {musics &&
        musics.map((music, key) => {
          return (
            <tr key={key}>
              <td>{music.id}</td>
              <td>{music["Artist Name"]}</td>
              <td>{music["Track Name"]}</td>
              <td>{music.Popularity}</td>
              <td>{music.danceability}</td>
              <td>{music.loudness}</td>
              <td>{music.tempo}</td>
            </tr>
          );
        })}
    </tbody>
  );
}
