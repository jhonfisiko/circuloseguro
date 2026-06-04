import React from 'react';
import Image from 'next/image';
import { CheckCircle, Phone, Mail, Award, MapPin, Shield } from 'lucide-react';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans relative">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20 px-6 md:px-12 text-center md:text-left overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-6 md:w-1/2 z-10">
            <span className="bg-blue-600 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
              Intermediaria ARL • Sector Seguridad Física
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Círculo Seguro
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 italic font-light">
              "Proteger es nuestra esencia"
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Somos el puente entre su Empresa y la ARL. Le acompañamos en la gestión, fortalecimiento y cumplimiento de su SG-SST.
            </p>
            <div className="pt-4">
              <a href="#contacto" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-8 py-4 rounded-xl shadow-lg transition duration-300 inline-block transform hover:-translate-y-1">
                Contáctanos hoy
              </a>
            </div>
          </div>
          
          {/* Contenedor del LOGO oficial con renderizado de alta fidelidad */}
         <div className="md:w-1/2 flex justify-center z-10">
  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-blue-500/30 flex items-center justify-center p-6 bg-slate-800/40 backdrop-blur-md shadow-2xl transition duration-500 hover:scale-105">
    
    {/* Añadimos 'overflow-hidden' aquí para que obligue a la imagen a recortarse en forma de círculo perfecto y se "coma" las esquinas cuadradas */}
    <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center shadow-inner overflow-hidden">
      <Image 
        src="/logoquda.png" 
        alt="Círculo Seguro Logo Oficial" 
        fill
        quality={100}
        className="image-render-auto select-none"
        // Reducimos el padding de 1.5rem a 0.8rem para que el logo se vea más grande e imponente dentro de la esfera
        style={{ objectFit: 'contain', padding: '0.8rem' }}
        priority
      />
    </div>

  </div>
</div>
        </div>
      </section>

      {/* 2. NUESTROS SERVICIOS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Consultoría Especializada</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Soluciones personalizadas y efectivas para ayudar a las organizaciones a mejorar su desempeño y cumplir con las normas vigentes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tarjeta ISOs */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-800">Certificaciones ISO</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• <strong>ISO 9001:</strong> Gestión de la Calidad</li>
              <li>• <strong>ISO 14001:</strong> Gestión Ambiental</li>
              <li>• <strong>ISO 45001:</strong> Seguridad y Salud en el Trabajo</li>
              <li>• <strong>ISO 39001:</strong> Seguridad Vial</li>
              <li>• <strong>ISO 27001:</strong> Seguridad de la Información</li>
              <li>• <strong>ISO 18788:</strong> Seguridad Privada</li>
            </ul>
          </div>

          {/* Tarjeta Cumplimiento */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-800">Cumplimiento Normativo</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• <strong>SARLAFT:</strong> Prevención de Lavado de Activos</li>
              <li>• <strong>Oficial de Cumplimiento</strong> asignado</li>
              <li>• <strong>BASC:</strong> Comercio Seguro</li>
              <li>• <strong>RUC:</strong> Evaluación de Proveedores</li>
            </ul>
          </div>

          {/* Tarjeta Alturas & ARL */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="bg-green-100 text-green-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-800">Acompañamiento Técnico</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• <strong>Coordinador de Alturas:</strong> Implementación de programas seguros.</li>
              <li>• <strong>Gestión Ante ARL:</strong> Acompañamos, gestionamos, facilitamos y optimizamos.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. BENEFICIOS */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-4">
            <h4 className="text-xl font-bold text-blue-400 mb-2">Mejora Continua</h4>
            <p className="text-gray-400 text-sm">Sistemas de gestión que promueven la eficiencia operativa.</p>
          </div>
          <div className="text-center p-4">
            <h4 className="text-xl font-bold text-purple-400 mb-2">Cumplimiento</h4>
            <p className="text-gray-400 text-sm">Evite sanciones corporativas y mejore la reputación de su marca.</p>
          </div>
          <div className="text-center p-4">
            <h4 className="text-xl font-bold text-green-400 mb-2">Menos Riesgos</h4>
            <p className="text-gray-400 text-sm">Mitigación efectiva de peligros en el entorno laboral.</p>
          </div>
          <div className="text-center p-4">
            <h4 className="text-xl font-bold text-yellow-400 mb-2">Productividad</h4>
            <p className="text-gray-400 text-sm">Procesos optimizados que cuidan y potencian a su equipo.</p>
          </div>
        </div>
      </section>

      {/* 4. EL EQUIPO */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Nuestro Liderazgo</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Cristian */}
          <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl border border-gray-100 shadow-sm transition hover:shadow-md">
            {/* Se incrementó el tamaño a h-44 y se ajustó el translate para integrar el recorte inferior de la imagen */}
            <div className="relative w-44 h-44 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-blue-500 p-[4px] shadow-xl mb-6">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                <Image 
                  src="/CRISTIAN.png" 
                  alt="Christian Alexander Granobles" 
                  fill 
                  sizes="176px"
                  quality={100}
                  className="object-cover scale-110 translate-y-3 select-none"
                  priority
                />
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-800 uppercase tracking-tight">CHRISTIAN ALEXANDER GRANOBLES CARRILLO</h3>
            <p className="text-blue-600 text-sm font-medium mb-2">Gerente General</p>
            <p className="text-gray-500 text-xs px-4 leading-relaxed">Asesor SST + Calidad + Ambiental | Profesional Seguridad y Salud en el Trabajo / Auditor Líder HSEQ</p>
          </div>

          {/* Hector */}
          <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl border border-gray-100 shadow-sm transition hover:shadow-md">
            {/* Se incrementó el tamaño a h-44 y se ajustó el translate para integrar el recorte inferior de la imagen */}
            <div className="relative w-44 h-44 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-500 to-purple-500 p-[4px] shadow-xl mb-6">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                <Image 
                  src="/HECTOR .png" 
                  alt="Hector Libardo Díaz" 
                  fill 
                  sizes="176px"
                  quality={100}
                  className="object-cover scale-115 translate-y-4 select-none"
                  priority
                />
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-800 uppercase tracking-tight">HECTOR LIBARDO DÍAZ NEIRA</h3>
            <p className="text-blue-600 text-sm font-medium mb-2">Director de Operaciones Logísticas</p>
            <p className="text-gray-500 text-xs px-4 leading-relaxed">Asesor SST | Técnico en Seguridad y Salud en el Trabajo</p>
          </div>
        </div>
      </section>

      {/* 5. CONTACTO & FOOTER */}
      <section id="contacto" className="bg-slate-100 py-16 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">¿Cómo podemos ayudarte?</h2>
          <p className="text-gray-600 mb-8">Contáctanos para obtener más información sobre cómo mejorar la seguridad y salud en el trabajo en tu organización.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm font-medium text-slate-700">
            <a href="tel:+573193197190" className="flex items-center justify-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:text-blue-600 transition">
              <Phone className="w-5 h-5 text-blue-600" />
              <span>+57 319 319 71 90</span>
            </a>
            <a href="mailto:circulosegurosltda@gmail.com" className="flex items-center justify-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:text-purple-600 transition">
              <Mail className="w-5 h-5 text-purple-600" />
              <span>circulosegurosltda@gmail.com</span>
            </a>
            <div className="flex items-center justify-center gap-3 bg-white p-4 rounded-xl shadow-sm">
              <MapPin className="w-5 h-5 text-green-600" />
              <span>Bogotá DC, Colombia</span>
            </div>
          </div>

          <p className="mt-12 text-xs text-gray-400 italic max-w-xl mx-auto leading-relaxed">
            "La cultura de la seguridad se ha logrado... Cuando los trabajadores se colocan protección, incluso cuando nadie está mirando."
          </p>
        </div>
      </section>

      {/* 6. BOTÓN FLOTANTE DE WHATSAPP */}
      <a 
        href="https://wa.me/573193197190?text=Hola,%20estoy%20interesado%20en%20conocer%20más%20sobre%20el%20portafolio%20de%20Círculo%20Seguro." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group hover:bg-[#20ba5a] transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Contactar por WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:hidden"></span>
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.66.986 3.288 1.498 4.86 1.499 5.421 0 9.83-4.408 9.833-9.83.002-2.628-1.02-5.1-2.871-6.953C16.56 2.016 14.1 1.01 11.512 1.01c-5.424 0-9.832 4.409-9.835 9.83-.001 1.77.5 3.49 1.446 5.01l-.97 3.548 3.635-.954zm10.957-7.234c-.1-.166-.368-.265-.77-.466-.401-.2-2.371-1.17-2.739-1.303-.368-.133-.635-.2-.903.2-.267.4-.1.466-.401.733-.234.23-.468.2-.87.001-.401-.2-1.693-.623-3.225-1.991-1.194-1.065-2.001-2.38-2.235-2.781-.234-.402-.025-.618.176-.818.18-.18.401-.467.602-.701.201-.233.267-.4.401-.667.135-.266.067-.5-.034-.701-.1-.2-.903-2.175-1.237-2.974-.325-.783-.656-.677-.903-.69-.234-.01-.502-.012-.77-.012-.267 0-.701.1-1.07.5-.368.4-1.4 1.367-1.4 3.335 0 1.967 1.433 3.868 1.633 4.135.201.266 2.818 4.302 6.828 6.031.954.412 1.697.658 2.28.843.959.304 1.831.261 2.522.158.77-.115 2.371-.967 2.705-1.9 1.335-1.134 2.335-2.1 2.335-2.267z"/>
        </svg>
      </a>

    </div>
  );
}