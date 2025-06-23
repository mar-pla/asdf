import React from "react";

export default function Realizations({ t }) {
  const images = [
    "https://t4.ftcdn.net/jpg/01/53/88/83/360_F_153888363_iJZnEn9jG85FkD6Arhacc8MfZXBDXuE5.jpg",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    "https://media.istockphoto.com/id/1442148484/pl/zdj%C4%99cie/rendering-3d-nowoczesnego-domu-podmiejskiego-w-ogrodzie.jpg?s=612x612&w=0&k=20&c=1AxWc5IwOk9nL9ECCG6PCT1UFNwsO0AWqgniMilZHkY=",
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold">{t.realizations}</h2>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        {images.map((url, i) => (
          <img key={i} src={url} alt={`Inwestycja ${i + 1}`} className="rounded-xl shadow object-cover h-48 w-full" />
        ))}
      </div>
    </section>
  );
}
