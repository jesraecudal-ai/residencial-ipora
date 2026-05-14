import { useState, useRef, useEffect } from 'react';
import { ArrowRight, Clock, Tag, Eye } from 'lucide-react';

function useViewCount(slug) {
  const key = `blog_views_${slug}`;
  const [views, setViews] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? parseInt(stored, 10) : Math.floor(Math.random() * 800) + 200;
  });

  useEffect(() => {
    const stored = localStorage.getItem(key);
    if (!stored) {
      const initial = Math.floor(Math.random() * 800) + 200;
      localStorage.setItem(key, initial);
      setViews(initial);
    }
  }, [key]);

  const increment = () => {
    setViews(prev => {
      const next = prev + 1;
      localStorage.setItem(key, next);
      return next;
    });
  };

  return [views, increment];
}

function RevealSection({ children, delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref} className="section-reveal">{children}</div>;
}

const iporaColor = 'trust-blue';
const boutiqueColor = 'champagne';

const iporaPosts = [
  {
    slug: 'cuidado-adultos-mayores-uruguay',
    title: 'Guía completa para elegir un hogar de adultos mayores en Uruguay',
    category: 'Guías',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    date: '10 de mayo, 2025',
    content: `Tomar la decisión de buscar una residencia para un ser querido es uno de los momentos más difíciles que atraviesa una familia. En Uruguay, la demanda de hogares geriátricos de calidad ha crecido significativamente en los últimos años, pero la oferta de opciones verdaderamente buenas sigue siendo escasa.

¿Qué hace que un hogar de adultos mayores sea realmente bueno?

La primera pregunta que debés hacerte es: ¿cuántos residentes tiene el hogar? Los hogares pequeños, con menos de 15 residentes, tienen una enorme ventaja: cada persona recibe atención real e individual. En hogares masivos, los adultos mayores se pierden en la rutina colectiva y la atención personalizada desaparece.

En Residencial Iporá mantenemos deliberadamente un número reducido de residentes. No porque no podamos crecer, sino porque elegimos no hacerlo. La calidad está por encima del volumen.

El equipo humano es lo más importante

Podés ver instalaciones hermosas, equipamiento moderno y jardines perfectos. Pero si el equipo humano no tiene vocación genuina de cuidado, todo lo demás no vale nada. Cuando visités un hogar, observá cómo los cuidadores interactúan con los residentes. ¿Los llaman por su nombre? ¿Sonríen? ¿Se agachan para hablarles a la altura de los ojos?

Sonia Sanguinet, fundadora de Residencial Iporá, tiene más de una década dedicada al cuidado de adultos mayores. No por necesidad económica, sino por vocación. Eso marca la diferencia en cada detalle del día a día.

Verificá los servicios incluidos antes de firmar

Muchos hogares en Uruguay tienen precios aparentemente bajos, pero el costo real aparece después: medicamentos extra, pañales, ropa de cama, atención médica adicional. En Residencial Iporá el precio es transparente: alimentación completa, cuidado 24 horas, visitas médicas semanales, trabajador social y actividades recreativas están todos incluidos. Sin sorpresas.

El entorno físico importa más de lo que creés

Los adultos mayores que viven en entornos naturales tienen menos episodios de ansiedad y depresión, mejor calidad de sueño y mayor vitalidad física. Residencial Iporá está ubicado junto al parque natural protegido de Balneario Iporá, en Tacuarembó — uno de los entornos más hermosos y tranquilos del Uruguay interior.

La accesibilidad para las familias

Un buen hogar entiende que la familia no desaparece cuando el residente ingresa. Las visitas frecuentes, la comunicación regular con los cuidadores y la transparencia absoluta sobre el estado de salud del familiar son características no negociables. En Residencial Iporá las familias tienen contacto directo con Sonia y Nicolás en todo momento.

Consultá por WhatsApp a Nicolás (+598 98 282 938) o a Sonia (+598 91 064 292) para recibir orientación gratuita y sin compromiso sobre cómo elegir el mejor hogar para tu familiar en Uruguay.`,
  },
  {
    slug: 'beneficios-vida-naturaleza-adultos-mayores',
    title: '¿Por qué el entorno natural es clave para el bienestar de los adultos mayores?',
    category: 'Bienestar',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    date: '2 de abril, 2025',
    content: `La evidencia científica es contundente: los adultos mayores que viven en contacto con la naturaleza tienen mejor salud física, mejor salud mental y una mayor sensación de bienestar general. Esta no es una opinión ni una tendencia de marketing; es el resultado de décadas de investigación en geriatría y psicología ambiental.

La naturaleza como terapia no farmacológica

En Japón existe el concepto de "Shinrin-yoku" o "baños de bosque", reconocido oficialmente como práctica terapéutica por el Ministerio de Salud. Los beneficios documentados incluyen reducción del cortisol (hormona del estrés), disminución de la presión arterial, mejora del sistema inmune y mayor producción de serotonina.

Para los adultos mayores, estos beneficios son especialmente relevantes porque muchos de los problemas de salud más comunes en la tercera edad — hipertensión, ansiedad, insomnio, depresión — responden positivamente a la exposición a entornos naturales.

Balneario Iporá: un entorno terapéutico único en Uruguay

Residencial Iporá no eligió su ubicación por casualidad. Balneario Iporá, en el departamento de Tacuarembó, está rodeado de un parque natural protegido que ofrece aire limpio, árboles centenarios, fauna silvestre y un silencio que en las ciudades es imposible encontrar.

Los residentes de Iporá pueden disfrutar cada mañana de un paseo por el entorno natural, respirar aire puro sin contaminación, escuchar pájaros en lugar de bocinas, y conectar con los ritmos naturales de luz y temperatura que tanto bien hacen al reloj biológico de las personas mayores.

La luz natural y el ritmo circadiano

Uno de los problemas más frecuentes en los hogares geriátricos urbanos es la alteración del ritmo circadiano. Los residentes con poca exposición a luz natural pierden el ciclo sueño-vigilia, lo que lleva a insomnio nocturno, somnolencia diurna y mayor confusión mental. En entornos naturales, la exposición adecuada a la luz solar mantiene el ritmo biológico en equilibrio.

En Residencial Iporá, los espacios exteriores y la abundancia de luz natural son parte integral del diseño del hogar, no un accidente. Sabemos que el sol de la mañana y la tarde tranquila son parte del tratamiento.

El impacto emocional del verde

Ver verde — plantas, árboles, césped — tiene un efecto calmante inmediato en el sistema nervioso. Estudios realizados en hospitales demuestran que los pacientes con vistas a jardines se recuperan más rápido, necesitan menos analgésicos y reportan menos dolor que quienes ven paredes o estacionamientos.

Para un adulto mayor que vive en un residencial, tener acceso visual y físico a espacios verdes no es un lujo; es una necesidad terapéutica. Es parte del cuidado.

¿Querés que tu familiar disfrute de un entorno natural único en Uruguay? Contactá a Sonia al +598 91 064 292 o escribile a Nicolás al +598 98 282 938 por WhatsApp.`,
  },
  {
    slug: 'senales-necesita-cuidado-profesional',
    title: '10 señales de que tu familiar necesita cuidado profesional',
    category: 'Consejos',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80',
    date: '15 de marzo, 2025',
    content: `Una de las decisiones más difíciles que enfrentan las familias uruguayas es reconocer el momento en que su ser querido necesita más ayuda de la que pueden brindar en casa. El amor y la culpa se mezclan de manera que muchas familias esperan demasiado tiempo, lo que pone en riesgo tanto al adulto mayor como a los cuidadores familiares.

Estas son las 10 señales más claras de que es hora de buscar cuidado profesional:

1. Caídas frecuentes o miedo a caer

Las caídas son la principal causa de hospitalizaciones en adultos mayores en Uruguay. Si tu familiar ha caído más de una vez en los últimos seis meses, o si tiene miedo de moverse solo, necesita supervisión continua que la familia generalmente no puede proveer sin descuidar otros aspectos de su vida.

2. Pérdida de peso significativa

Si notás que tu familiar está perdiendo peso sin razón aparente, puede ser porque olvida comer, no puede cocinar con seguridad, tiene dificultad para masticar o tragar, o simplemente pierde el apetito por depresión o aislamiento. En un residencial con nutricionista, este problema se detecta y trata de inmediato.

3. Confusión o olvidos que afectan la seguridad

Olvidar apagar el gas, perderse en lugares conocidos, no reconocer a personas cercanas, confundir medicamentos — estas son señales de que la persona no puede vivir sola con seguridad.

4. Abandono de la higiene personal

Cuando un adulto mayor que antes era cuidadoso con su higiene comienza a descuidarla — no bañarse, usar la misma ropa días seguidos, tener mal olor — puede ser una señal de depresión, pérdida de movilidad o inicio de demencia.

5. Aislamiento social severo

La soledad en adultos mayores tiene efectos en la salud comparables a fumar 15 cigarrillos por día, según investigaciones de la Universidad de Brigham Young. Si tu familiar ha dejado de ver amigos, no sale de casa y pasa los días sin interacción social, su salud está en riesgo.

6. El cuidador familiar está agotado

El agotamiento del cuidador es una señal tan importante como cualquier síntoma del adulto mayor. Si quien cuida en casa ya no puede más — físicamente, emocionalmente, económicamente — la calidad del cuidado inevitablemente cae. Buscar apoyo profesional no es rendirse; es ser responsable.

7. Necesidad de atención médica frecuente

Si tu familiar requiere visitas médicas frecuentes, control de medicamentos complejos o tiene enfermedades crónicas que necesitan monitoreo constante, un residencial con médico visitante semanal y cuidadores entrenados puede brindar mejor atención que la familia promedio.

8. Incontinencia no manejada

La incontinencia es una de las razones más frecuentes por las que las familias buscan ayuda profesional. Los cuidadores profesionales están entrenados para manejar esto con dignidad y eficiencia, sin el componente emocional que complica esta situación en el entorno familiar.

9. Comportamientos de riesgo

Salir de noche, dejar la puerta abierta, usar elementos de cocina de manera peligrosa — estos comportamientos requieren supervisión continua que un cuidador familiar a tiempo parcial no puede proveer.

10. El propio adulto mayor lo pide

Sorprendentemente, muchos adultos mayores en Uruguay expresan el deseo de vivir en un lugar donde haya más compañía, donde no sientan que son una carga para sus hijos, donde tengan actividades y vida social. Escuchar este pedido es un acto de amor.

Si reconocés varias de estas señales en tu familiar, contactá a Sonia Sanguinet al +598 91 064 292 o a Nicolás Macedo al +598 98 282 938. Una conversación honesta puede cambiar la vida de toda la familia.`,
  },
  {
    slug: 'alimentacion-adultos-mayores-uruguay',
    title: 'Nutrición en la tercera edad: qué comer para vivir mejor',
    category: 'Salud',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80',
    date: '5 de febrero, 2025',
    content: `La alimentación en la tercera edad es uno de los pilares más importantes del bienestar, y también uno de los más frecuentemente descuidados. Las necesidades nutricionales de un adulto mayor son radicalmente diferentes a las de una persona joven, y atenderlas correctamente puede marcar la diferencia entre una vejez activa y saludable o una marcada por el deterioro y la enfermedad.

Por qué cambian las necesidades nutricionales con la edad

Con el paso de los años, el cuerpo experimenta cambios profundos que afectan directamente la forma en que procesa los alimentos. El metabolismo se vuelve más lento, la masa muscular disminuye, la densidad ósea cae y la capacidad de absorber ciertos nutrientes se reduce. Al mismo tiempo, el sentido del gusto y el olfato pueden debilitarse, haciendo que la comida resulte menos apetecible.

Estas transformaciones crean un escenario paradójico: el cuerpo necesita una alimentación más cuidadosa y precisa, pero el apetito naturalmente disminuye. Por eso la nutrición en adultos mayores requiere planificación profesional, no improvisación.

Los nutrientes más críticos en la tercera edad

Proteínas: Esenciales para mantener la masa muscular y prevenir la sarcopenia (pérdida de músculo), las proteínas deben estar presentes en cada comida principal. Fuentes recomendadas: huevo, carne magra, legumbres, lácteos.

Calcio y Vitamina D: La osteoporosis afecta a más del 30% de las mujeres uruguayas mayores de 65 años. El calcio de los lácteos, las sardinas y los vegetales de hoja verde, combinado con exposición solar para la síntesis de vitamina D, es fundamental.

Fibra: El estreñimiento es uno de los problemas más frecuentes en adultos mayores. Una dieta rica en fibra — verduras, legumbres, frutas, cereales integrales — junto con hidratación adecuada, previene este problema que afecta enormemente la comodidad diaria.

Omega-3: Los ácidos grasos esenciales presentes en el pescado, las nueces y las semillas de lino tienen un efecto protector sobre la salud cardiovascular y cognitiva. Varios estudios sugieren que el consumo regular de omega-3 puede ralentizar el deterioro cognitivo en personas mayores.

Hidratación: Los adultos mayores sienten menos sed pero necesitan tanta o más agua que los jóvenes. La deshidratación en personas mayores provoca confusión mental, estreñimiento, infecciones urinarias y caídas. Asegurarse de que tomen líquidos frecuentemente, aunque no lo pidan, es esencial.

El enfoque nutricional en Residencial Iporá

En Residencial Iporá trabajamos con una nutricionista para diseñar menús semanales equilibrados, variados y adaptados a las necesidades individuales de cada residente. Si alguien tiene diabetes, hipertensión, problemas renales o alergias alimentarias, su menú se ajusta de manera personalizada.

Las comidas en Iporá no son simples trámites nutricionales. Son momentos sociales importantes, preparados con cuidado y presentados de manera apetecible. Sabemos que comer rico es parte de vivir bien.

¿Querés saber más sobre cómo cuidamos la nutrición de nuestros residentes? Contactá a Sonia al +598 91 064 292 por WhatsApp.`,
  },
  {
    slug: 'actividades-adultos-mayores-bienestar',
    title: 'Actividades que mantienen la mente y el cuerpo activos en la tercera edad',
    category: 'Vida en el hogar',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    date: '20 de enero, 2025',
    content: `El envejecimiento activo es uno de los conceptos más importantes de la geriatría moderna. La Organización Mundial de la Salud define el envejecimiento activo como el proceso de optimizar las oportunidades de salud, participación y seguridad para mejorar la calidad de vida de las personas a medida que envejecen. En otras palabras: no basta con estar vivo, hay que vivir.

Por qué el movimiento es medicina

La inactividad física en adultos mayores es uno de los factores de riesgo más importantes para la pérdida de autonomía. Cuando una persona mayor deja de moverse, la masa muscular se pierde, el equilibrio empeora, el riesgo de caídas aumenta y la mente se deteriora más rápidamente. El movimiento diario — aunque sea caminar, estirarse o bailar — es literalmente medicina.

En Residencial Iporá, cada día está estructurado para incluir actividad física adecuada a las capacidades de cada residente. No se trata de hacer ejercicio intenso, sino de mantener el cuerpo en movimiento de manera constante y segura.

Estimulación cognitiva: el cerebro también se entrena

Las enfermedades neurodegenerativas como el Alzheimer y otras demencias no tienen cura, pero hay evidencia sólida de que la estimulación cognitiva regular puede retrasar su progresión. Juegos de memoria, crucigramas, lectura, música, conversaciones estimulantes y actividades artísticas mantienen el cerebro activo y crean nuevas conexiones neuronales.

En Iporá organizamos actividades cognitivas adaptadas a cada residente. No se trata de tests ni evaluaciones; se trata de actividades placenteras que mantienen la mente despierta y la persona conectada con el mundo.

La importancia de la socialización

El aislamiento social en adultos mayores tiene consecuencias tan graves como las enfermedades físicas. Las conversaciones cotidianas, las risas compartidas, los pequeños rituales del hogar — tomar mate juntos, ver las noticias, comentar el tiempo — son parte fundamental del bienestar emocional.

En Residencial Iporá, el tamaño reducido del hogar favorece relaciones genuinas entre residentes y entre residentes y cuidadores. No hay anonimato. Todos se conocen, todos se importan.

Actividades que realizamos en Residencial Iporá:
- Caminatas por el parque natural de Iporá
- Sesiones de música y canto
- Manualidades y actividades artísticas
- Juegos de mesa y actividades cognitivas
- Charlas y conversaciones guiadas
- Celebración de cumpleaños y fechas especiales
- Conexión con familias mediante videollamadas

¿Querés conocer más sobre la vida cotidiana en Residencial Iporá? Escribile a Sonia al +598 91 064 292 por WhatsApp.`,
  },
  {
    slug: 'cuidado-demencia-alzheimer-uruguay',
    title: 'Cuidado especializado para personas con demencia en Uruguay',
    category: 'Salud',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
    date: '8 de diciembre, 2024',
    content: `La demencia — que incluye el Alzheimer, la demencia vascular y otras formas de deterioro cognitivo — es una de las condiciones de salud más desafiantes para las familias uruguayas. Según estimaciones de la Organización Mundial de la Salud, más de 55 millones de personas en el mundo viven con alguna forma de demencia, y Uruguay, con su población altamente envejecida, no es la excepción.

¿Qué es exactamente la demencia?

La demencia no es una única enfermedad sino un síndrome — un conjunto de síntomas — que resulta del daño cerebral causado por diferentes enfermedades. Los síntomas más comunes incluyen pérdida de memoria, confusión, dificultad para comunicarse, cambios de personalidad, pérdida de orientación en tiempo y espacio, y dificultad para realizar tareas cotidianas.

Es importante distinguir la demencia del envejecimiento normal. Olvidar dónde dejaste las llaves es normal. Olvidar para qué sirven las llaves puede ser una señal de demencia.

El impacto en las familias uruguayas

Cuidar a un familiar con demencia en casa es uno de los desafíos más agotadores que existe. La persona que conocías cambia. Sus reacciones son impredecibles. Puede agitarse, deambular de noche, no reconocerte, resistirse al cuidado. El cuidador familiar promedio dedica más de 40 horas semanales al cuidado de un familiar con demencia avanzada, con un altísimo costo en salud física y mental propia.

En Uruguay, los servicios especializados en demencia son escasos y frecuentemente costosos. Muchas familias se encuentran solas, sin orientación, sin apoyo profesional y sin descanso.

El enfoque humanizado de Residencial Iporá

En Residencial Iporá hemos acompañado a residentes con diferentes grados de deterioro cognitivo. Nuestro enfoque se basa en tres principios:

Rutina y predictibilidad: Las personas con demencia se benefician enormemente de rutinas estables y predecibles. Saber qué viene después — la hora del desayuno, el paseo, el almuerzo — reduce la ansiedad y mejora el comportamiento. En Iporá mantenemos rutinas claras y consistentes.

Comunicación adaptada: Aprendemos a comunicarnos según las capacidades actuales de cada residente. Voz tranquila, frases simples, contacto físico afectuoso cuando es bien recibido. No forzamos recuerdos ni corregimos confusiones que causan angustia innecesaria.

Entorno seguro y estimulante: Un ambiente sin peligros físicos pero rico en estímulos sensoriales apropiados — música familiar, fotografías, plantas, animales cuando es posible — ayuda a mantener la calma y la orientación.

¿Tu familiar tiene diagnóstico de demencia o Alzheimer? Contactá a Sonia al +598 91 064 292 o a Nicolás al +598 98 282 938 para una conversación confidencial sobre cómo podemos ayudar.`,
  },
  {
    slug: 'diferencia-entre-hogar-y-geriatrico-uruguay',
    title: 'Hogar vs. geriátrico: ¿cuál es la diferencia y cuál elegir en Uruguay?',
    category: 'Guías',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80',
    date: '1 de noviembre, 2024',
    content: `En Uruguay, los términos "hogar de ancianos", "residencial de adultos mayores", "geriátrico" y "casa de salud" se usan frecuentemente como sinónimos, pero en realidad describen modelos de atención muy diferentes. Entender estas diferencias es clave para tomar la mejor decisión para tu familiar.

El modelo geriátrico tradicional

Un geriátrico o casa de salud tradicional es una institución médica con estructura hospitalaria. Suelen tener muchos residentes — a veces más de 50 — personal rotativo, enfoque en la atención médica y menos énfasis en el bienestar emocional y la vida cotidiana. Son buenos para personas con necesidades médicas muy complejas, pero pueden resultar fríos e impersonales para quienes simplemente necesitan compañía, cuidado y supervisión.

El modelo hogar-residencial

Un hogar residencial como Residencial Iporá tiene una filosofía diferente. El foco está en que la persona mayor viva — no solo exista — en un entorno cálido, familiar y personalizado. Pocos residentes, equipo estable y conocido, rutinas humanas, espacios confortables. La atención médica está garantizada (médico visitante semanal), pero no es el elemento central del modelo; lo es el bienestar integral.

¿Cuándo elegir cada opción?

Si tu familiar tiene condiciones médicas muy agudas que requieren atención de enfermería o médica varias veces al día, un geriátrico medicalizado puede ser la opción adecuada. Si tu familiar necesita supervisión, compañía, cuidado personal, alimentación, actividades y seguridad en un entorno amable y humano, un hogar residencial como Residencial Iporá es la mejor elección.

La trampa del precio bajo

En Uruguay existe una amplia variedad de precios en el sector. Algunos hogares ofrecen precios muy bajos, pero conviene preguntar qué incluye ese precio. ¿Están incluidos la alimentación, la atención médica, los pañales, las actividades? ¿Cuántos cuidadores hay por residente?

En Residencial Iporá el precio es transparente e incluye todo lo esencial. Sonia y Nicolás responden personalmente todas las preguntas de las familias antes de cualquier decisión.

Escribile a Nicolás al +598 98 282 938 para recibir orientación sin compromiso sobre qué tipo de cuidado necesita tu familiar.`,
  },
  {
    slug: 'cuidadores-familiares-agotamiento-uruguay',
    title: 'El síndrome del cuidador: cómo reconocerlo y qué hacer',
    category: 'Familias',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80',
    date: '5 de octubre, 2024',
    content: `En Uruguay, se estima que más de 200.000 personas ejercen el rol de cuidadores informales de adultos mayores en su familia. La gran mayoría son mujeres — hijas, nueras, esposas — que asumen esta responsabilidad en silencio, muchas veces a costa de su propia salud, su carrera y su vida personal.

El síndrome del cuidador es una condición reconocida por la medicina que describe el agotamiento físico, emocional y mental que experimentan quienes cuidan a una persona dependiente de manera prolongada. No es debilidad. No es falta de amor. Es el resultado inevitable de un sistema que pone toda la carga del cuidado sobre los hombros de una sola persona o una sola familia.

¿Cómo reconocer el agotamiento del cuidador?

Las señales más comunes incluyen: irritabilidad y cambios de humor frecuentes, insomnio o necesidad excesiva de dormir, descuido de la propia salud (no ir al médico, comer mal, no hacer ejercicio), sentimientos de resentimiento o culpa, aislamiento social propio, y sensación de que no se puede con todo pero tampoco se puede pedir ayuda.

Muchos cuidadores reconocen en estas señales su propia situación, pero siguen adelante porque sienten que no tienen opción. Que pedir ayuda sería traicionar a su familiar. Que nadie podría cuidarle tan bien como ellos.

La verdad que nadie dice

Cuidar a un adulto mayor con necesidades complejas en casa, sin formación ni apoyo profesional, frecuentemente resulta en un cuidado de menor calidad que el que podría brindar un equipo profesional entrenado. Esto no es una crítica — es una realidad. El amor no reemplaza la formación, el equipo y los recursos adecuados.

Delegar el cuidado a un hogar profesional como Residencial Iporá no es abandonar a tu familiar. Es darte el permiso de volver a ser hijo, esposo o hermano — en lugar de ser enfermero, médico y asistente social simultáneamente.

El descanso del cuidador también es cuidado

En Residencial Iporá trabajamos muy estrechamente con las familias. No desaparecemos una vez que el residente ingresa. Mantenemos comunicación regular, respondemos consultas, incluimos a la familia en las decisiones y hacemos que cada visita sea una experiencia positiva para todos.

Hablá con Nicolás al +598 98 282 938. Una conversación honesta sobre tu situación puede ser el primer paso para cuidarte mejor — y cuidar mejor a quien más querés.`,
  },
  {
    slug: 'costo-cuidado-adultos-mayores-uruguay',
    title: 'Cuánto cuesta el cuidado de adultos mayores en Uruguay: guía de precios',
    category: 'Guías',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
    date: '12 de septiembre, 2024',
    content: `Una de las primeras preguntas que hacen las familias uruguayas cuando comienzan a buscar opciones de cuidado para un adulto mayor es: ¿cuánto cuesta? Es una pregunta completamente legítima y necesaria, y merece una respuesta honesta.

El mercado del cuidado geriátrico en Uruguay es muy heterogéneo. Los precios varían enormemente según la zona geográfica, el tipo de institución, los servicios incluidos y la calidad del cuidado. Entender esta variación es fundamental para comparar opciones de manera justa.

Rangos de precio en el mercado uruguayo

Las opciones más económicas del mercado — hogares con muchos residentes, personal mínimo y servicios básicos — pueden comenzar en precios relativamente bajos, pero frecuentemente no incluyen atención médica regular, actividades, nutricionista ni servicios adicionales. El precio real termina siendo mucho mayor que el anunciado.

Las opciones de calidad media-alta — hogares con menor número de residentes, personal estable, médico visitante y servicios completos — tienen un costo acorde a su propuesta. En Residencial Iporá el precio está disponible bajo consulta directa y es transparente: todo lo que tu familiar necesita está incluido.

El costo de cuidar en casa

Muchas familias optan por el cuidado en casa porque piensan que es más económico. Pero cuando sumás el costo de un cuidador contratado (parcial o completo), los gastos médicos, los medicamentos, las adaptaciones del hogar, la comida especial y el costo del tiempo de los familiares que dejan de trabajar o reducen sus horas, el cuidado en casa frecuentemente resulta igual o más costoso — y más desgastante.

¿Qué incluye el precio en Residencial Iporá?

En Residencial Iporá el precio mensual incluye: alimentación completa (con asesoramiento de nutricionista), cuidado continuo 24 horas, visitas médicas semanales, visitas de trabajador social, actividades recreativas y sociales, y cuidado de la higiene personal. No hay sorpresas. No hay extras ocultos.

Para conocer el precio actual de Residencial Iporá y verificar disponibilidad, contactá a Sonia Sanguinet directamente al +598 91 064 292 por WhatsApp. La consulta es gratuita y sin compromiso.`,
  },
  {
    slug: 'adaptacion-adulto-mayor-residencial',
    title: 'Cómo ayudar a tu familiar a adaptarse a la vida en un residencial',
    category: 'Consejos',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1576765608866-5b51046452be?w=800&q=80',
    date: '20 de agosto, 2024',
    content: `El ingreso a un residencial es un momento de transición que puede generar ansiedad tanto en el adulto mayor como en su familia. Es completamente normal. Cambiar de hogar, de rutinas, de entorno — a cualquier edad, pero especialmente en la tercera edad — requiere tiempo y acompañamiento. La buena noticia es que con las estrategias adecuadas, la adaptación puede ser mucho más suave de lo que muchas familias temen.

La primera semana: las expectativas correctas

Es frecuente que durante los primeros días el adulto mayor exprese tristeza, extrañe su casa anterior y pida volver. Esto no significa que la decisión fue incorrecta. Es la respuesta normal a cualquier cambio significativo. La clave es no dejarse llevar por el pánico en esta etapa inicial.

El equipo de Residencial Iporá tiene amplia experiencia en acompañar estos primeros días. Sonia y los cuidadores dedican atención especial a los nuevos residentes: conocer sus gustos, sus rutinas, sus temas de conversación favoritos, sus miedos. Cuanto antes el nuevo residente se sienta conocido y reconocido, más rápida es la adaptación.

Qué pueden hacer las familias

Visitá con frecuencia pero sin sobrecargar. Las primeras semanas, visitas cortas y frecuentes son mejor que visitas largas e infrecuentes. La presencia familiar tranquiliza sin crear dependencia ni dificultar la integración al nuevo entorno.

Llevá objetos significativos. Fotos, una manta, una almohada, objetos decorativos queridos — estos elementos familiares en el nuevo espacio reducen la sensación de extrañeza y crean continuidad entre la vida anterior y la nueva.

Comunicá bien con el equipo. Contales a los cuidadores todo lo que saben sobre su familiar: sus gustos, sus manías, sus miedos, sus rutinas preferidas. Cuanta más información tiene el equipo, mejor puede personalizar el cuidado.

No expresés culpa delante del residente. Si la familia llega angustiada, pidiendo perdón, llorando — el residente lo percibe y su propia angustia aumenta. Llegá con serenidad, con amor tranquilo, con historias de la vida familiar cotidiana.

El rol del hogar en la adaptación

Un buen residencial hace una gran diferencia en la velocidad y calidad de la adaptación. La escala pequeña de Residencial Iporá — pocos residentes, equipo conocido y estable — permite que el nuevo residente se convierta rápidamente en parte de una comunidad real. No en un número en una lista.

Para consultas sobre el proceso de ingreso en Residencial Iporá, contactá a Sonia al +598 91 064 292 o a Nicolás al +598 98 282 938.`,
  },
];

const boutiquePosts = [
  {
    slug: 'boutique-que-es-ipor-boutique',
    title: 'Qué es Residencial Iporá Boutique: el lujo del cuidado personalizado en Uruguay',
    category: 'Iporá Boutique',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=800&q=80',
    date: '1 de mayo, 2026',
    content: `En Uruguay, el mercado del cuidado de adultos mayores ha crecido significativamente en los últimos años, pero una pregunta sigue sin respuesta para muchas familias: ¿existe en Uruguay una opción de cuidado verdaderamente premium, comparable a lo que existe en Europa o en los países más desarrollados del mundo? Hasta ahora, la respuesta honesta era no. Residencial Iporá Boutique cambia eso.

¿Qué es un residencial boutique?

El concepto de "residencial boutique" viene del mundo hotelero, donde un hotel boutique es aquel que prioriza la experiencia individual por encima del volumen. Pocos huéspedes, atención ultra-personalizada, diseño cuidado, experiencias únicas. Trasladado al mundo del cuidado de adultos mayores, significa exactamente eso: un lugar donde cada residente recibe una atención que ninguna institución masiva podría brindar.

Residencial Iporá Boutique — apertura el 1 de agosto de 2026 en Uruguay — es el primer proyecto de este tipo desarrollado por el equipo que ya lleva más de 4 años operando Residencial Iporá en Tacuarembó con estándares de excelencia reconocidos por las familias que confían en ellos.

¿A quién está dirigido?

Iporá Boutique está diseñado para familias que no aceptan términos medios en el cuidado de sus seres queridos. Familias que valoran la discreción, la privacidad y la atención absolutamente personalizada. Que han visto cómo funciona el sistema geriátrico convencional — impersonal, masificado, burocrático — y saben que para su familiar quieren algo diferente.

La filosofía: lo mejor o nada

El equipo de Iporá Boutique no cree en el cuidado a medias. Cada residente tiene un plan de atención completamente individualizado. El ratio cuidador-residente es significativamente superior al estándar del mercado. Los profesionales incluidos — médico, nutricionista, trabajador social — son parte del servicio, no extras opcionales.

La diferencia está en los detalles: conocer los gustos, las historias, las rutinas y los sueños de cada residente. Celebrar lo que importa. Escuchar de verdad.

El proyecto está actualmente en etapa de capitalización. No hay sede física todavía — la habrá el 1 de agosto de 2026. Lo que sí existe es la trayectoria de Iporá, la fecha comprometida y el equipo que ya lo ha demostrado.

Para pre-reservar tu lugar o conocer más detalles del proyecto, contactá a Nicolás Macedo directamente al +598 98 282 938 por WhatsApp. Los cupos son estrictamente limitados.`,
  },
  {
    slug: 'boutique-por-que-uruguay-cuidado-premium',
    title: '¿Por qué Uruguay es el destino ideal para el cuidado boutique de adultos mayores?',
    category: 'Iporá Boutique',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80',
    date: '10 de abril, 2026',
    content: `Uruguay tiene una combinación única de características que lo convierten en uno de los mejores países del mundo para el cuidado de adultos mayores de alto nivel. Esta no es publicidad: es una realidad documentada por organismos internacionales y reconocida por las familias que han tomado la decisión de traer a sus seres queridos al país.

Seguridad y estabilidad institucional

Uruguay es sistemáticamente reconocido como el país más seguro y estable de América Latina. La ausencia de conflictos políticos violentos, la solidez institucional, el bajo índice de criminalidad y la corrupción reducida crean un entorno donde las familias pueden confiar en que sus seres queridos estarán seguros.

Para familias de Argentina, Brasil o de la diáspora uruguaya en Europa que buscan opciones de cuidado de calidad, Uruguay ofrece la tranquilidad que otros países latinoamericanos no pueden garantizar.

Sistema de salud con cobertura universal

Uruguay tiene uno de los sistemas de salud más desarrollados de América Latina, con cobertura universal a través del FONASA y una amplia red de prestadores privados. Esto garantiza que los residentes de un hogar de calidad como Iporá Boutique tengan acceso a especialistas, hospitalizaciones y tratamientos complejos cuando los necesiten.

Cultura del cuidado y la familia

La sociedad uruguaya tiene una cultura profunda de respeto por los adultos mayores. Los abuelos son figuras centrales en las familias uruguayas. Esta cultura permea el sector del cuidado y se traduce en cuidadores con vocación genuina, difícil de encontrar en países donde el trabajo con adultos mayores es visto como una opción de último recurso.

Naturaleza y clima benevolente

Uruguay tiene un clima templado, sin extremos, ideal para personas mayores. Los inviernos son suaves, los veranos moderados. Y la naturaleza — los parques, el litoral, los ríos, las sierras — está presente en casi todo el territorio. Para Iporá Boutique, la elección de ubicaciones como Rivera representa un entorno de paz y belleza natural que potencia el bienestar de los residentes.

Costo de vida competitivo

Comparado con los países del hemisferio norte, el costo de vida en Uruguay es significativamente menor. Esto permite que un servicio de altísima calidad — como el que ofrecerá Iporá Boutique — tenga precios razonables para familias que buscan lo mejor sin los precios de Europa o Estados Unidos.

Para saber más sobre cómo Iporá Boutique aprovecha todas estas ventajas para ofrecer el mejor cuidado posible, escribile a Nicolás al +598 98 282 938 por WhatsApp.`,
  },
  {
    slug: 'boutique-pre-reserva-proceso',
    title: 'Cómo funciona el proceso de pre-reserva en Iporá Boutique',
    category: 'Iporá Boutique',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    date: '15 de marzo, 2026',
    content: `Residencial Iporá Boutique abre el 1 de agosto de 2026 con un número estrictamente limitado de plazas. Esta limitación no es una estrategia de marketing: es una consecuencia directa de la filosofía boutique. Más plazas significan menos atención individual, y eso es exactamente lo que Iporá Boutique se niega a comprometer.

Por eso el proceso de pre-reserva es importante, honesto y transparente.

¿Qué es una pre-reserva?

Una pre-reserva es el compromiso de reservar una plaza para tu familiar en Iporá Boutique antes de la apertura, con una seña del 50% del primer mes de servicio. Esta seña garantiza el lugar y da inicio a la conversación personalizada sobre el plan de atención de tu familiar.

La pre-reserva no es un contrato rígido. Es el comienzo de una relación.

El proceso paso a paso

Paso 1 — La conversación inicial: Todo comienza con un mensaje de WhatsApp a Nicolás Macedo (+598 98 282 938). Sin formularios, sin burocracia. Una conversación humana sobre la situación de tu familiar, sus necesidades, tus expectativas. Nicolás responde personalmente.

Paso 2 — Información completa sobre el proyecto: Nicolás te comparte toda la información del proyecto: el servicio, el precio exacto, las fechas, la ubicación, el equipo. Toda pregunta tiene respuesta honesta. Si el proyecto no es lo que tu familia busca, te lo decimos antes que después.

Paso 3 — La seña y la confirmación: Si decidís avanzar, coordinamos el pago de la seña (50% del primer mes) y confirmamos formalmente la reserva. Esto garantiza el lugar y da inicio a la planificación personalizada.

Paso 4 — Preparación hasta agosto 2026: Desde la pre-reserva hasta la apertura, el equipo de Iporá Boutique mantiene comunicación regular con las familias pre-reservadas. No desaparecemos después de recibir la seña.

¿Qué pasa si no puedo?

Si por cualquier razón tu familiar no puede ingresar el 1 de agosto de 2026, la seña se devuelve íntegramente. No hay letra chica.

¿Hay lugar para mi familiar? Contactá a Nicolás ahora al +598 98 282 938 por WhatsApp. Los cupos se están reservando y son limitados por diseño.`,
  },
  {
    slug: 'boutique-diferencias-cuidado-convencional',
    title: 'Qué diferencia a Iporá Boutique de un geriátrico convencional en Uruguay',
    category: 'Iporá Boutique',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80',
    date: '20 de febrero, 2026',
    content: `Para entender verdaderamente lo que ofrece Residencial Iporá Boutique, conviene compararlo directamente con el modelo de atención geriátrica convencional que predomina en Uruguay. Las diferencias son estructurales, no cosméticas.

Número de residentes

Un geriátrico convencional en Uruguay tiene en promedio entre 30 y 80 residentes. A ese volumen, la atención personalizada es prácticamente imposible. Los residentes se vuelven parte de una rutina colectiva: se levantan todos a la misma hora, comen los mismos menús, hacen las mismas actividades.

Iporá Boutique tendrá un número máximo de residentes diseñado específicamente para garantizar que cada persona reciba atención real e individualizada. Menos residentes significa más atención, más conocimiento de cada persona y relaciones más auténticas con el equipo.

Ratio cuidador-residente

En los hogares convencionales, es común encontrar ratios de 1 cuidador por cada 8-12 residentes durante el día, y menos durante la noche. En Iporá Boutique, el ratio es significativamente superior, con 2 cuidadores por turno de día como mínimo, garantizando presencia real y atención inmediata.

Profesionales incluidos vs. opcionales

En muchos geriátricos uruguayos, el médico viene cuando hay emergencia. El nutricionista es un servicio extra. El trabajador social aparece para trámites administrativos. En Iporá Boutique, médico, nutricionista y trabajador social son parte del servicio estándar, incluidos en el precio mensual.

Personalización vs. estandarización

El modelo convencional estandariza: menús iguales, rutinas iguales, tratamientos iguales. El modelo boutique personaliza: cada residente tiene un plan adaptado a sus necesidades, preferencias y historia de vida. Sus gustos, su horario de sueño, su dieta, sus actividades preferidas.

Comunicación con la familia

En los grandes geriátricos, la comunicación con la familia es frecuentemente burocrática: informes médicos periódicos, comunicados generales. En Iporá Boutique, Nicolás Macedo y el equipo tienen comunicación directa y personal con cada familia. Sin intermediarios, sin formularios.

Para experimentar la diferencia desde el primer contacto, escribile a Nicolás al +598 98 282 938 por WhatsApp. La conversación en sí ya te mostrará de qué hablamos.`,
  },
  {
    slug: 'boutique-familias-ocupadas-argentina-brasil',
    title: 'Para familias ocupadas con seres queridos en Uruguay: la solución boutique',
    category: 'Iporá Boutique',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80',
    date: '5 de enero, 2026',
    content: `Hay un perfil de familia que Residencial Iporá Boutique entiende perfectamente: la familia cuyos hijos viven en Montevideo, Buenos Aires, São Paulo o Madrid. Que trabajan, que tienen sus propias familias y responsabilidades. Que aman profundamente a sus padres o abuelos en Uruguay, pero no pueden estar físicamente presentes de manera cotidiana. Que cuando viajan a verlos quieren encontrarlos bien — realmente bien.

Para estas familias, el cuidado convencional no alcanza.

El problema con el cuidado a distancia

Cuando una familia vive lejos del adulto mayor, los miedos se multiplican. ¿Está comiendo bien? ¿Lo están cuidando realmente o solo lo están monitoreando? ¿Está solo, aburrido, deprimido? ¿Quién llama al médico si algo pasa en la madrugada? ¿Puedo confiar en que me avisan si algo cambia?

Estas preguntas tienen una sola respuesta tranquilizadora: un equipo que conoce personalmente a tu familiar y a tu familia, y que te comunica de manera directa y honesta lo que está pasando.

Lo que ofrece Iporá Boutique a las familias ocupadas

Comunicación directa con Nicolás: No hay call centers ni formularios. Cuando tenés una pregunta, escribís a Nicolás al +598 98 282 938 y obtenés respuesta. Así de simple, así de humano.

Informes regulares y proactivos: No esperamos que la familia pregunte para informar. Si hay algo para contar — un cambio en el estado de salud, una situación especial, un logro — la familia lo sabe.

Presencia continua real: Con el ratio de cuidadores de Iporá Boutique, tu familiar nunca está solo. No hay turnos de "menos personal". No hay momentos en que nadie está mirando.

Visitas planificadas y bienvenidas: Cuando la familia visita, encuentra un familiar que está bien, en un entorno que se puede ver y tocar, con un equipo que los conoce y los recibe. Nada que ocultar. Nada que temer.

Gestión de lo médico: El médico visitante semanal, el seguimiento de medicamentos, la coordinación con especialistas cuando es necesario — todo gestionado por el equipo de Iporá Boutique. La familia no tiene que estar pendiente de cada turno médico.

Si vivís lejos y buscás la certeza de que tu familiar en Uruguay está en las mejores manos posibles, Iporá Boutique es para vos. Escribile hoy a Nicolás al +598 98 282 938 por WhatsApp. Los cupos son limitados y agosto 2026 se acerca.`,
  },
];

function PostCard({ post, isBoutique, onSelect, isSelected }) {
  const [views, incrementViews] = useViewCount(post.slug);
  const whatsappHref = isBoutique
    ? `https://wa.me/59898282938?text=Hola%20Nicolás%2C%20leí%20el%20artículo%20sobre%20Iporá%20Boutique%20y%20quisiera%20más%20información`
    : `https://wa.me/59891064292?text=Hola%20Sonia%2C%20leí%20el%20blog%20y%20quisiera%20más%20información`;

  return (
    <article
      className={`bg-white rounded-2xl overflow-hidden border h-full flex flex-col transition-all duration-300 ${
        isBoutique
          ? 'border-champagne/30 hover:border-champagne/70 hover:shadow-lg hover:shadow-champagne/10'
          : 'border-slate-100 hover-lift'
      }`}
    >
      <div className="overflow-hidden h-52 flex-shrink-0 relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        {isBoutique && (
          <div className="absolute top-3 right-3 bg-champagne text-obsidian font-inter text-xs font-semibold px-3 py-1 rounded-full">
            Boutique
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className={`font-inter text-xs px-3 py-1 rounded-full flex items-center gap-1 ${
            isBoutique
              ? 'text-champagne bg-champagne/10'
              : 'text-trust-blue bg-trust-blue/10'
          }`}>
            <Tag className="w-3 h-3" /> {post.category}
          </span>
          <span className="font-inter text-xs text-slate-mist flex items-center gap-1">
            <Clock className="w-3 h-3" /> {post.readTime}
          </span>
          <span className="font-inter text-xs text-slate-mist flex items-center gap-1 ml-auto">
            <Eye className="w-3 h-3" /> {views.toLocaleString()}
          </span>
        </div>
        <h2 className="font-cormorant text-xl text-navy mb-3 leading-tight">{post.title}</h2>
        <p className="font-inter text-sm text-slate-mist leading-relaxed flex-1">
          {post.content.split('\n\n')[0].slice(0, 160)}...
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-inter text-xs text-slate-mist">{post.date}</span>
          <button
            onClick={() => { onSelect(post.slug); if (!isSelected) incrementViews(); }}
            className={`font-inter text-sm flex items-center gap-1 hover:gap-2 transition-all ${
              isBoutique ? 'text-champagne' : 'text-trust-blue'
            }`}
          >
            {isSelected ? 'Cerrar' : 'Leer'} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {isSelected && (
        <div className={`px-6 pb-6 border-t pt-5 ${isBoutique ? 'border-champagne/20' : 'border-slate-100'}`}>
          <div className="max-h-96 overflow-y-auto pr-2 scrollbar-hide">
            {post.content.split('\n\n').map((para, i) => (
              <div key={i} className="mb-4">
                {para.length < 80 && !para.startsWith('-') ? (
                  <h4 className="font-cormorant text-lg text-navy font-light mt-4 mb-2">{para}</h4>
                ) : para.startsWith('-') ? (
                  <p className="font-inter text-sm text-slate-mist pl-3 border-l-2 border-trust-blue/30 py-0.5">{para}</p>
                ) : (
                  <p className="font-inter text-sm text-slate-mist leading-relaxed">{para}</p>
                )}
              </div>
            ))}
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-full font-inter font-medium text-sm transition-all ${
              isBoutique
                ? 'bg-champagne text-obsidian hover:brightness-110'
                : 'text-white hover:opacity-90'
            }`}
            style={isBoutique ? {} : { backgroundColor: '#25D366' }}
          >
            {isBoutique ? 'Hablar con Nicolás — Iporá Boutique' : 'Contactar por WhatsApp'} →
          </a>
        </div>
      )}
    </article>
  );
}

export default function Blog() {
  const [selected, setSelected] = useState(null);
  const [tab, setTab] = useState('ipor a');

  const handleSelect = (slug) => setSelected(selected === slug ? null : slug);

  return (
    <div className="bg-sanctuary min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-sanctuary">
        <div
          className="absolute inset-0 opacity-5 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600&q=80')` }}
          aria-hidden="true"
        />
        <div className="max-w-4xl mx-auto px-5 md:px-10 text-center relative z-10">
          <span className="font-inter text-sm text-trust-blue uppercase tracking-widest block mb-4">Blog & Recursos</span>
          <h1 className="font-cormorant text-5xl md:text-7xl text-navy font-light mb-5">
            Información y consejos
          </h1>
          <p className="font-inter text-slate-mist text-lg max-w-2xl mx-auto">
            Artículos sobre cuidado de adultos mayores en Uruguay, bienestar y los proyectos de Residencial Iporá.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-4 pb-2">
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => setTab('ipora')}
            className={`font-inter text-sm font-medium px-5 py-2 rounded-full border transition-all ${
              tab === 'ipora'
                ? 'bg-trust-blue text-white border-trust-blue'
                : 'text-slate-mist border-slate-200 hover:border-trust-blue hover:text-trust-blue'
            }`}
          >
            Residencial Iporá
          </button>
          <button
            onClick={() => setTab('boutique')}
            className={`font-inter text-sm font-medium px-5 py-2 rounded-full border transition-all ${
              tab === 'boutique'
                ? 'bg-champagne text-obsidian border-champagne'
                : 'text-slate-mist border-slate-200 hover:border-champagne hover:text-champagne'
            }`}
          >
            ✦ Iporá Boutique
          </button>
          <button
            onClick={() => setTab('all')}
            className={`font-inter text-sm font-medium px-5 py-2 rounded-full border transition-all ${
              tab === 'all'
                ? 'bg-navy text-white border-navy'
                : 'text-slate-mist border-slate-200 hover:border-navy hover:text-navy'
            }`}
          >
            Ver todos
          </button>
        </div>
      </div>

      {/* Iporá Posts */}
      {(tab === 'ipora' || tab === 'all') && (
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-5 md:px-10">
            {tab === 'all' && (
              <div className="mb-8">
                <h2 className="font-cormorant text-3xl text-navy font-light">Residencial Iporá — Tacuarembó</h2>
                <p className="font-inter text-slate-mist text-sm mt-1">Cuidado de adultos mayores en Uruguay</p>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {iporaPosts.map((post, i) => (
                <RevealSection key={post.slug} delay={i * 60}>
                  <PostCard
                    post={post}
                    isBoutique={false}
                    onSelect={handleSelect}
                    isSelected={selected === post.slug}
                  />
                </RevealSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Boutique Posts */}
      {(tab === 'boutique' || tab === 'all') && (
        <section className={`py-10 ${tab === 'all' ? 'bg-obsidian' : 'bg-sanctuary'}`}>
          <div className="max-w-7xl mx-auto px-5 md:px-10">
            {tab === 'all' && (
              <div className="mb-8">
                <span className="font-inter text-xs text-champagne uppercase tracking-widest block mb-2">Próximamente · Agosto 2026</span>
                <h2 className="font-cormorant text-3xl text-ivory font-light">Residencial Iporá Boutique</h2>
                <p className="font-inter text-ivory/50 text-sm mt-1">Cuidado exclusivo premium en Rivera & Punta del Este, Uruguay</p>
              </div>
            )}
            {tab === 'boutique' && (
              <div className="mb-10 border border-champagne/20 rounded-2xl p-6 bg-obsidian">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
                  <span className="font-inter text-champagne text-sm uppercase tracking-widest">Apertura 1 de agosto, 2026</span>
                </div>
                <h2 className="font-cormorant text-3xl text-ivory font-light mb-2">Residencial Iporá Boutique</h2>
                <p className="font-inter text-ivory/60 text-sm mb-4">Cuidado exclusivo y absolutamente personalizado para adultos mayores en Uruguay. Pre-reservas abiertas.</p>
                <a
                  href="https://wa.me/59898282938?text=Hola%20Nicolás%2C%20me%20interesa%20Iporá%20Boutique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-inter font-medium text-obsidian bg-champagne hover:brightness-110 transition-all text-sm"
                >
                  Hablar con Nicolás — Co-Fundador →
                </a>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boutiquePosts.map((post, i) => (
                <RevealSection key={post.slug} delay={i * 80}>
                  <PostCard
                    post={post}
                    isBoutique={true}
                    onSelect={handleSelect}
                    isSelected={selected === post.slug}
                  />
                </RevealSection>
              ))}
            </div>

            <RevealSection delay={200}>
              <div className="mt-12 text-center border border-champagne/30 rounded-3xl p-8 bg-navy/50">
                <h3 className="font-cormorant text-3xl text-ivory font-light mb-3">¿Querés reservar un lugar antes de agosto 2026?</h3>
                <p className="font-inter text-ivory/60 text-sm mb-5 max-w-xl mx-auto">
                  Los cupos de Iporá Boutique son estrictamente limitados. Las familias que pre-reservan hoy aseguran su lugar con el 50% de seña y entran en conversación directa con Nicolás.
                </p>
                <a
                  href="https://wa.me/59898282938?text=Hola%20Nicolás%2C%20me%20interesa%20pre-reservar%20en%20Residencial%20Iporá%20Boutique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-inter font-medium text-obsidian bg-champagne hover:brightness-110 transition-all"
                >
                  Hablar con Nicolás — +598 98 282 938 →
                </a>
              </div>
            </RevealSection>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-trust-blue text-center">
        <RevealSection>
          <div className="max-w-2xl mx-auto px-5">
            <h2 className="font-cormorant text-4xl text-white font-light mb-4">
              ¿Tenés preguntas sobre el cuidado de tu familiar?
            </h2>
            <p className="font-inter text-white/80 mb-7">
              Hablá con Sonia o Nicolás. Sin presiones, sin compromiso. Solo una conversación humana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/59891064292?text=Hola%20Sonia%2C%20leí%20el%20blog%20y%20tengo%20preguntas"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-inter font-medium text-trust-blue bg-white hover:bg-white/90 transition-all"
              >
                Hablar con Sonia →
              </a>
              <a
                href="https://wa.me/59898282938?text=Hola%20Nicolás%2C%20leí%20el%20blog%20y%20tengo%20preguntas"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-inter font-medium text-white border border-white/40 hover:bg-white/10 transition-all"
              >
                Hablar con Nicolás →
              </a>
            </div>
          </div>
        </RevealSection>
      </section>
    </div>
  );
}