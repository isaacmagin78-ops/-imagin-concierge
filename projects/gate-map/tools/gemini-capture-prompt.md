# Capturing the property with a live AI walk-through

Two separate jobs. Do them in this order — the satellite pass makes the walk faster,
because you already know how many buildings you're looking for.

---

## Job 1 — Screen share: the satellite view

Open Google Maps, find the community, switch to satellite, zoom so the whole property
fills the screen. Share the screen and say:

> I'm sharing a satellite view of a gated community. Describe the layout precisely:
> where the entrance gate is, the shape of the road system from the gate inward, and
> the position of every building I can see relative to that road. Number the buildings
> in the order a car would pass them driving in from the gate. Tell me which buildings
> face away from the road, and flag any road that dead-ends. Don't guess at anything
> the image doesn't show — say "can't tell" instead.

**Also just screenshot it.** The description helps, the raw image helps more.

---

## Job 2 — Camera: the walk

Start standing at the gate, facing in. Walk the route a driver would drive. Say:

> I'm walking a gated residential community to build a delivery-driver map. As I walk,
> record each building and landmark in the order I reach them. For each one capture:
> the building number or name exactly as posted, the unit numbers if a sign shows
> them, and how you'd tell a delivery driver to get there from the front gate in plain
> spoken directions. Also note anything that would confuse a driver — an entrance
> facing away from the road, an unmarked building, a dead end. Only record what is
> physically visible. If a unit range isn't posted, say "not posted" rather than
> inferring it.

At the end, ask for it in this exact shape:

> Now output everything as a numbered list. For each entry give: BUILDING <number> or
> the landmark name in caps, then Units, then From gate, then Note. Plain text, no
> commentary.

---

## The one accuracy trap

An AI describing a building will happily invent a unit range that looks plausible
("Units 101–124") when the sign doesn't say it. That error is invisible in the output
and lands a driver at the wrong building.

Unit ranges are real only if you saw them on:
- a building placard or entry sign,
- the mailbox bank,
- or a posted property directory.

Anything else gets marked "not posted" and stays blank on the map. A building with no
unit range is still useful — a missing range is a small gap, a wrong range is a wrong
delivery.

---

## What to send back

1. The satellite screenshot.
2. The final numbered list from the walk.

That's enough to build the real map.
