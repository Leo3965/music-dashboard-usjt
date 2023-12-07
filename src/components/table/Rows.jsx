export default function Row({ musics }) {
  return (
    <tbody>
      {musics && musics.map((music, key) => {
        return <tr key={key}>
          <td dataLabel="id">{music.id}</td>
          <td dataLabel="Artista">{music["Artist Name"]}</td>
          <td dataLabel="Música">{music["Track Name"]}</td>
          <td dataLabel="Popularidade">{music.Popularity}</td>
          <td dataLabel="Dançabilidade">{music.danceability}</td>
          <td dataLabel="Intensidade">{music.loudness}</td>
          <td dataLabel="Duração">{music.tempo}</td>
        </tr>;
      })}
    </tbody>
  );
}
