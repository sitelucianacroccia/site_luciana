import fenixLogo from '../../imports/Fenix_fundo_transparente.png';
import img1 from '../../imports/WhatsApp_Image_2020-04-25_at_16.42.45.jpeg';
import img2 from '../../imports/WhatsApp_Image_2020-04-25_at_16.43.30.jpeg';
import img3 from '../../imports/WhatsApp_Image_2020-04-25_at_16.43.33.jpeg';
import img4 from '../../imports/WhatsApp_Image_2020-04-25_at_16.43.36.jpeg';
import img5 from '../../imports/WhatsApp_Image_2020-04-25_at_16.44.49_(2).jpeg';
import img6 from '../../imports/WhatsApp_Image_2020-04-25_at_16.44.51_(2).jpeg';
import img7 from '../../imports/WhatsApp_Image_2020-04-25_at_16.47.18_(2).jpeg';

export function ImageTest() {
  const images = [
    { src: fenixLogo, name: 'Logo Fênix' },
    { src: img1, name: 'Consultório 1' },
    { src: img2, name: 'Pêndulo' },
    { src: img3, name: 'Radiestesia' },
    { src: img4, name: 'Atendimento' },
    { src: img5, name: 'Flores 1' },
    { src: img6, name: 'Flores 2' },
    { src: img7, name: 'Jardim' }
  ];

  return (
    <div className="p-8 bg-white">
      <h1 className="text-3xl mb-8">Teste de Imagens</h1>
      <div className="grid grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div key={i} className="border p-4">
            <img src={img.src} alt={img.name} className="w-full h-40 object-cover mb-2" />
            <p className="text-sm text-center">{img.name}</p>
            <p className="text-xs text-gray-500 text-center">{img.src ? '✓ OK' : '✗ ERROR'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
