# 🏰 Wealth Quest– Juego de negociación con IA

## 📖 Descripción
Este proyecto es un **RPG narrativo de comercio medieval**, donde el jugador toma el rol de un **mercader** que interactúa con clientes que llegan a su tienda.  
El objetivo es **regatear, persuadir y negociar** con diferentes tipos de personajes para vender ítems, administrar inventario y generar reputación.

El diferencial del proyecto es la integración futura de **NLP (Procesamiento de Lenguaje Natural)** y **LLMs locales** para que los clientes tengan diálogos dinámicos y personalizados, haciendo que cada negociación sea única.

---

## 🚀 Estado actual
- Desarrollo del **front-end en React Native (Expo)**.
- Interfaz inicial de juego:
  - Inventario del mercader.
  - Llegada de clientes con distintas personalidades.
  - Chat de regateo entre jugador y NPC.
- Implementación de un **motor de negociación mock** en el front:
  - El NPC responde en base a reglas simples (paciencia, riqueza, personalidad).
  - El jugador puede ofertar, aceptar o rechazar propuestas.
- Flujo jugable básico: venta de ítems y actualización de monedas.

---

## 🎯 Roadmap
### Próximos pasos técnicos
1. **Parser de texto**: interpretar lo que escribe el jugador (ej: detectar precios o ítems en frases como “te lo dejo a 80 monedas”).
2. **Motor de NLP**:
   - Clasificación de intención (oferta, rechazo, burla, etc.).
   - Extracción de entidades (precio, ítem, cliente).
   - Análisis de sentimiento para modular la reacción del NPC.
3. **Integración con LLM local**:
   - Clientes con personalidades diferenciadas (desconfiado, impaciente, rico, etc.).
   - Generación de argumentos dinámicos en la negociación.
4. **Sistema de reputación y memoria**:
   - El juego recordará interacciones pasadas con cada cliente.
   - Clientes adaptarán sus reacciones según la historia con el jugador.

---

## 🧰 Tecnologías
- **Frontend:** React Native (Expo).
- **Estado:** React Context / Zustand (en evaluación).
- **Mock Engine:** lógica en JavaScript para pruebas de negociación.
- **Planeado para NLP/IA:**  
  - Tokenización y embeddings locales.  
  - Integración con modelos ligeros de LLM (en un inicio estoy probando con Phi-3).  
  - Vector DB en local para memoria de NPCs.  

---

## 🌟 Motivación
Este proyecto combina mis tres intereses principales:
- **Desarrollo de software**.
- **Inteligencia Artificial y NLP**, área en la que me estoy especializando dentro de mi Licenciatura en Ciencia de Datos.
- **Las historias y juegos estilo medieval** 🏰

La meta es tener un juego que no solo sea entretenido, sino que también me sirva como **laboratorio práctico de IA aplicada al diseño narrativo y la interacción natural**.

