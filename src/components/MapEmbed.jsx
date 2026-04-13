const MapEmbed = () => {
  return (
    <div className="w-full h-[250px] rounded-xl overflow-hidden border border-cyan-500/20">
      <iframe
        src="https://www.google.com/maps?q=SMK+Negeri+20+Jakarta+Selatan&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
      />
    </div>
  );
};

export default MapEmbed;