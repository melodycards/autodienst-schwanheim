import type { IconName } from "../components/Icon";

export type Service = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  purpose: string;
  signs: string[];
  checks: string;
  next: string;
  related: string[];
  notice?: string;
};

export const services: Service[] = [
  {
    slug: "tuev-au-service",
    title: "TÜV & AU-Service",
    description: "TÜV & AU-Service in Frankfurt-Schwanheim: HU und AU verständlich erklärt. TÜV jeden Mittwoch bei Autodienst Schwanheim, bitte vorher abstimmen.",
    intro: "Die Hauptuntersuchung prüft, ob ein Fahrzeug die Anforderungen an Verkehrs- und Umweltsicherheit erfüllt. Die Untersuchung des Abgasverhaltens gehört bei entsprechenden Fahrzeugen dazu.",
    purpose: "Die umgangssprachlich als TÜV bezeichnete HU ist eine Prüfung durch eine berechtigte Prüforganisation. Sie ersetzt weder die regelmäßige Wartung noch die Diagnose einer konkreten Störung. Den nächsten Prüftermin finden Sie in den Fahrzeugunterlagen und auf der Prüfplakette.",
    signs: ["Der nächste HU-Termin steht an.", "Im letzten Prüfbericht wurden Mängel oder Hinweise festgehalten.", "Nach einer nicht bestandenen Prüfung ist eine Nachprüfung erforderlich."],
    checks: "Zu den Prüfpunkten gehören unter anderem Bremsen, Lenkung, Beleuchtung, Reifen und sicherheitsrelevante Fahrzeugteile. Festgestellte Mängel werden im Prüfbericht dokumentiert. Welche Vorbereitungen oder Arbeiten sinnvoll sind, lässt sich anhand des Fahrzeugs und vorhandener Berichte abstimmen.",
    next: "Halten Sie zur Anfrage Ihre Fahrzeugdaten und den bisherigen Prüfbericht bereit. Bitte nehmen Sie vorab Kontakt auf, damit Termin, benötigte Unterlagen und das weitere Vorgehen abgestimmt werden können.",
    notice: "TÜV ist jeden Mittwoch bei Autodienst Schwanheim möglich.",
    related: ["inspektion", "bremsenservice", "abgasanlage"],
  },
  {
    slug: "inspektion",
    title: "Inspektion",
    description: "Inspektion in Frankfurt-Schwanheim: Wartungsbedarf, Intervalle und typische Prüfpunkte. Den passenden Umfang mit Autodienst Schwanheim abstimmen.",
    intro: "Eine Inspektion ist die regelmäßige Durchsicht des Fahrzeugs. Sie hilft, Verschleiß und anstehende Wartungsarbeiten frühzeitig zu erkennen.",
    purpose: "Was zum jeweiligen Termin gehört, hängt vom Fahrzeug, seinem Alter, der Laufleistung und den Herstellervorgaben ab. Ein Servicehinweis im Fahrzeug oder das Wartungsheft geben Orientierung. Eine HU ist kein Ersatz für diese Wartung.",
    signs: ["Die Serviceanzeige meldet eine fällige Wartung.", "Das vorgesehene Zeit- oder Kilometerintervall ist erreicht.", "Die Wartungshistorie ist nach einem Fahrzeugkauf unklar."],
    checks: "Eine Durchsicht kann etwa Flüssigkeitsstände, Beleuchtung, Bereifung, Bremsen und sichtbare Undichtigkeiten umfassen. Vorgeschriebene Wechselarbeiten werden anhand der Fahrzeugdaten ermittelt. Der konkrete Umfang wird vor dem Auftrag besprochen; nicht jedes Verschleißteil muss bei jeder Inspektion erneuert werden.",
    next: "Bringen Sie vorhandene Wartungsnachweise mit und nennen Sie Kilometerstand sowie bekannte Auffälligkeiten. So kann Autodienst Schwanheim den anstehenden Service mit Ihnen einordnen.",
    related: ["oelwechsel", "luft-und-innenraumfilter", "bremsenservice"],
  },
  {
    slug: "oelwechsel",
    title: "Ölwechsel",
    description: "Ölwechsel bei Autodienst Schwanheim in Frankfurt: Warum Motoröl altert, wann ein Wechsel ansteht und welche Fahrzeugangaben wichtig sind.",
    intro: "Motoröl schmiert bewegliche Teile und hilft, Wärme und Verunreinigungen abzutransportieren. Mit der Nutzung verändern sich seine Eigenschaften; deshalb ist ein regelmäßiger Wechsel wichtig.",
    purpose: "Entscheidend sind die Freigabe des Fahrzeugherstellers und das vorgesehene Wechselintervall. Häufige Kurzstrecken können das Öl stärker beanspruchen. Eine bestimmte Viskosität allein sagt noch nicht aus, ob ein Öl für den jeweiligen Motor geeignet ist.",
    signs: ["Die Anzeige erinnert an den Ölservice.", "Der letzte Ölwechsel liegt länger zurück oder ist nicht dokumentiert.", "Das vorgesehene Wechselintervall ist erreicht."],
    checks: "Beim Ölservice werden das alte Öl und in der Regel der Ölfilter ersetzt. Ölmenge und Spezifikation richten sich nach dem Motor. Anschließend werden Füllstand und mögliche Undichtigkeiten kontrolliert. Ölverlust oder ungewöhnlich hoher Verbrauch brauchen gegebenenfalls eine gesonderte Prüfung.",
    next: "Nennen Sie Fahrzeugmodell, Motorisierung und Kilometerstand. Bei einer roten Öldruckwarnung sicher anhalten, den Motor abstellen und Hilfe organisieren; ein bloßer Ölwechsel ist dann keine ausreichende Klärung.",
    related: ["inspektion", "motordiagnose", "luft-und-innenraumfilter"],
  },
  {
    slug: "fahrzeugdiagnose",
    title: "Fahrzeugdiagnose",
    description: "Fahrzeugdiagnose in Frankfurt-Schwanheim: Auffälligkeiten systematisch einordnen und die nächsten Prüfschritte mit Autodienst Schwanheim besprechen.",
    intro: "Eine Fahrzeugdiagnose sucht nach der Ursache einer Störung. Dabei werden Ihre Beobachtungen mit dem Zustand und den verfügbaren Informationen des Fahrzeugs zusammengeführt.",
    purpose: "Eine Warnmeldung benennt nicht immer das defekte Bauteil. Elektrische, elektronische und mechanische Ursachen können ähnliche Symptome auslösen. Eine systematische Prüfung hilft, unnötigen Teiletausch zu vermeiden.",
    signs: ["Eine Warnleuchte oder wiederkehrende Meldung erscheint.", "Eine Fahrzeugfunktion arbeitet nur zeitweise oder fällt aus.", "Geräusche, Vibrationen oder ein verändertes Fahrverhalten sind aufgefallen."],
    checks: "Am Anfang stehen eine genaue Beschreibung und eine Sichtprüfung. Je nach Fahrzeug und Fehlerbild können gespeicherte Meldungen, Betriebswerte sowie betroffene Bauteile und Verbindungen geprüft werden. Welche weiteren Messungen nötig sind, ergibt sich aus den Befunden; ein Fehlercode allein ist noch keine vollständige Diagnose.",
    next: "Notieren Sie, wann der Fehler auftritt: bei kaltem Motor, bei Regen, beim Beschleunigen oder dauerhaft. Fotos der Warnmeldung und frühere Werkstattberichte helfen bei der Abstimmung.",
    related: ["fehlerauslesen", "motordiagnose", "batterie-akku"],
  },
  {
    slug: "fehlerauslesen",
    title: "Fehlerauslesen",
    description: "Fehlerspeicher auslesen in Frankfurt: Was Fehlercodes aussagen und warum sie eingeordnet werden müssen. Kontakt zu Autodienst Schwanheim.",
    intro: "Steuergeräte können erkannte Störungen im Fehlerspeicher ablegen. Das Auslesen macht diese Einträge zugänglich und liefert Anhaltspunkte für die weitere Fehlersuche.",
    purpose: "Ein gespeicherter Code beschreibt meist eine erkannte Abweichung. Er beweist nicht automatisch, dass das darin genannte Bauteil ersetzt werden muss. Auch ältere oder nur zeitweise auftretende Störungen können noch gespeichert sein.",
    signs: ["Eine Kontrollleuchte ist an oder war vorübergehend an.", "Eine Störung tritt sporadisch auf und ist beim Termin nicht mehr spürbar.", "Für eine weitere Diagnose werden gespeicherte Meldungen benötigt."],
    checks: "Soweit das Fahrzeug es unterstützt, lassen sich Fehlercodes und zugehörige Informationen auslesen. Anschließend werden sie mit den aktuellen Beschwerden abgeglichen. Das Löschen eines Eintrags beseitigt nicht dessen Ursache; bei wiederkehrenden Meldungen sind weitere Prüfungen erforderlich.",
    next: "Löschen Sie Meldungen möglichst nicht vor der Prüfung. Teilen Sie Autodienst Schwanheim mit, seit wann die Auffälligkeit besteht und ob zuvor Reparaturen oder Batteriearbeiten durchgeführt wurden.",
    related: ["fahrzeugdiagnose", "motordiagnose", "batterie-akku"],
  },
  {
    slug: "motordiagnose",
    title: "Motordiagnose",
    description: "Motordiagnose bei Autodienst Schwanheim: Unruhigen Motorlauf, Leistungsverlust und Warnmeldungen in Frankfurt-Schwanheim gezielt prüfen lassen.",
    intro: "Bei der Motordiagnose steht das Laufverhalten des Motors im Mittelpunkt. Ziel ist es, auffällige Symptome einzugrenzen, bevor über eine Reparatur entschieden wird.",
    purpose: "Unruhiger Lauf oder Leistungsverlust können verschiedene Ursachen haben, etwa in der Luftversorgung, Kraftstoffversorgung, Zündung oder Motorsteuerung. Nicht jede Auffälligkeit hat dieselbe Ursache, auch wenn sie sich ähnlich anfühlt.",
    signs: ["Der Motor läuft unruhig oder ruckelt.", "Die Leistung hat spürbar nachgelassen.", "Die Motorkontrollleuchte leuchtet oder der Verbrauch hat sich verändert."],
    checks: "Eine Prüfung beginnt mit den Betriebsbedingungen, unter denen die Störung auftritt. Sichtbare Schäden, Verbindungen, gespeicherte Meldungen und verfügbare Betriebswerte können Hinweise liefern. Weitere Untersuchungen werden auf das konkrete Fehlerbild abgestimmt.",
    next: "Beschreiben Sie Startverhalten, Geräusche und mögliche Veränderungen möglichst genau. Bei starkem Ruckeln, blinkender Warnleuchte oder Überhitzung die Fahrt sicher unterbrechen und vor der Weiterfahrt fachlichen Rat einholen.",
    related: ["fahrzeugdiagnose", "fehlerauslesen", "oelwechsel"],
  },
  {
    slug: "reifenservice",
    title: "Reifenservice",
    description: "Reifenservice in Frankfurt-Schwanheim: Zustand, Luftdruck und Radwechsel mit Autodienst Schwanheim abstimmen. Hinweise zu Verschleiß und Schäden.",
    intro: "Reifen übertragen Brems-, Antriebs- und Lenkkräfte auf die Straße. Ihr Zustand beeinflusst das Fahrverhalten und die Haftung, besonders bei Nässe.",
    purpose: "Zum Reifenservice gehören je nach Auftrag der Wechsel von Rädern oder Reifen und die Prüfung ihres Zustands. Welche Arbeiten erforderlich sind, hängt von Bereifung, Schäden und Verschleißbild ab.",
    signs: ["Ein saisonaler Wechsel steht an.", "Das Profil ist ungleichmäßig abgenutzt.", "Der Luftdruck fällt wiederholt ab oder es treten Vibrationen auf."],
    checks: "Bei einer Kontrolle werden unter anderem Profil, sichtbare Beschädigungen, Luftdruck und der Zustand von Rad und Ventil betrachtet. Nach einer Montage sind korrekter Sitz und Befestigung wichtig. Auffälliger Verschleiß kann zusätzlich eine Prüfung von Fahrwerk oder Radeinstellung erfordern.",
    next: "Geben Sie Reifengröße und Ihr Anliegen bei der Kontaktaufnahme an. Bei einer sichtbaren Beule, einem erheblichen Schaden oder starkem Druckverlust nicht einfach weiterfahren, sondern die sichere Weiterbeförderung klären.",
    related: ["radeinstellung", "bremsenservice", "inspektion"],
  },
  {
    slug: "radeinstellung",
    title: "Radeinstellung",
    description: "Radeinstellung in Frankfurt-Schwanheim: Spurabweichungen und ungleichmäßigen Reifenverschleiß verstehen und mit Autodienst Schwanheim prüfen lassen.",
    intro: "Die Stellung der Räder zueinander und zur Fahrbahn beeinflusst den Geradeauslauf. Eine passende Radeinstellung unterstützt ein berechenbares Lenkverhalten und gleichmäßigen Reifenverschleiß.",
    purpose: "Nach einem starken Schlag durch ein Schlagloch oder nach Arbeiten am Fahrwerk kann eine Kontrolle sinnvoll sein. Ein schief stehendes Lenkrad hat jedoch nicht zwangsläufig nur eine Ursache; auch Reifen und Fahrwerk müssen berücksichtigt werden.",
    signs: ["Das Fahrzeug zieht auf ebener Strecke auffällig zu einer Seite.", "Das Lenkrad steht bei Geradeausfahrt schief.", "Die Reifen nutzen sich auf einer Seite stärker ab."],
    checks: "Grundsätzlich werden zuerst Reifen und relevante Fahrwerksteile auf Zustand und Spiel geprüft. Anschließend können die Radstellungswerte mit den fahrzeugspezifischen Vorgaben verglichen werden. Welche Werte einstellbar sind, hängt von der Konstruktion ab; ausgeschlagene Teile müssen zuvor berücksichtigt werden.",
    next: "Berichten Sie von Bordsteinkontakten, Schlaglöchern oder kürzlich ausgeführten Fahrwerksarbeiten. Autodienst Schwanheim stimmt mit Ihnen ab, welche Prüfung zum Fahrzeug und zum Verschleißbild passt.",
    related: ["reifenservice", "inspektion", "bremsenservice"],
  },
  {
    slug: "bremsenservice",
    title: "Bremsenservice",
    description: "Bremsenservice bei Autodienst Schwanheim in Frankfurt: Verschleiß, Geräusche und veränderte Bremswirkung fachlich einordnen lassen.",
    intro: "Die Bremsanlage gehört zu den wichtigsten Sicherheitssystemen des Fahrzeugs. Regelmäßige Kontrolle hilft, Verschleiß und andere Auffälligkeiten rechtzeitig zu erkennen.",
    purpose: "Beläge und Scheiben verschleißen abhängig von Nutzung und Fahrweise. Auch Leitungen, Bremssättel und Bremsflüssigkeit beeinflussen die Funktion. Ein Geräusch allein erlaubt noch keine sichere Aussage über die Ursache.",
    signs: ["Schleifen, Quietschen oder Vibrationen treten beim Bremsen auf.", "Eine Brems- oder Verschleißwarnung erscheint.", "Pedalgefühl oder Bremswirkung haben sich verändert."],
    checks: "Zu einer fachlichen Prüfung können Belag- und Scheibenzustand, sichtbare Undichtigkeiten, Leitungen und die Funktion beweglicher Teile gehören. Ein Austausch wird anhand des tatsächlichen Zustands und der Fahrzeugvorgaben beurteilt. Der notwendige Umfang wird vor den Arbeiten besprochen.",
    next: "Bei deutlich verringerter Bremswirkung, Flüssigkeitsverlust oder ungewöhnlich weichem Pedal nicht weiterfahren. Stellen Sie das Fahrzeug sicher ab und klären Sie telefonisch das weitere Vorgehen mit fachlicher Hilfe.",
    related: ["tuev-au-service", "reifenservice", "inspektion"],
  },
  {
    slug: "abgasanlage",
    title: "Auspuff",
    description: "Auspuff und Abgasanlage in Frankfurt-Schwanheim: Geräusche, Undichtigkeiten und Befestigungen mit Autodienst Schwanheim prüfen lassen.",
    intro: "Die Abgasanlage führt Abgase vom Motor weg und dämpft Geräusche. Je nach Fahrzeug gehören auch Bauteile zur Abgasreinigung zum System.",
    purpose: "Korrosion, beschädigte Verbindungen oder gelöste Halterungen können die Anlage beeinträchtigen. Ein lauter Auspuff ist deshalb nicht nur eine Geräuschfrage: Eine Undichtigkeit kann auch dazu führen, dass Abgase an unerwünschten Stellen austreten.",
    signs: ["Das Fahrzeug klingt plötzlich deutlich lauter.", "Unter dem Fahrzeug klappert oder scheppert es.", "Es riecht nach Abgasen oder eine abgasbezogene Warnmeldung erscheint."],
    checks: "Eine Sicht- und Funktionsprüfung kann Rohre, Schalldämpfer, Verbindungen und Befestigungen umfassen. Bei Warnmeldungen wird zusätzlich eingegrenzt, ob die Abgasreinigung oder Motorsteuerung beteiligt ist. Nicht jedes Geräusch erfordert den Austausch der gesamten Anlage.",
    next: "Nennen Sie die Art des Geräusches und wann es auftritt. Bei Abgasgeruch im Innenraum die Fahrt sicher unterbrechen und vor einer weiteren Nutzung Hilfe einholen.",
    related: ["tuev-au-service", "motordiagnose", "fehlerauslesen"],
  },
  {
    slug: "batterie-akku",
    title: "Batterie und Akku",
    description: "Batterie und Akku bei Autodienst Schwanheim: Startprobleme und die 12-Volt-Versorgung in Frankfurt-Schwanheim prüfen und das Vorgehen abstimmen.",
    intro: "Die 12-Volt-Batterie versorgt das Bordnetz und stellt bei vielen Fahrzeugen die Energie zum Starten bereit. Ein schwacher Ladezustand kann sich besonders beim Start bemerkbar machen.",
    purpose: "Eine entladene Batterie ist nicht automatisch defekt. Kurzstrecken, längere Standzeiten, elektrische Verbraucher oder eine Störung im Ladesystem kommen ebenfalls als Ursachen infrage. Deshalb sollte vor einem Austausch die Ursache eingegrenzt werden.",
    signs: ["Der Anlasser dreht langsam oder der Motor startet nicht.", "Nach längerer Standzeit treten wiederholt Startprobleme auf.", "Das Fahrzeug meldet eine schwache Bordnetzversorgung."],
    checks: "Grundsätzlich werden Batteriezustand, Ladezustand, Anschlüsse und die Versorgung des Bordnetzes betrachtet. Falls ein Ersatz nötig ist, müssen Bauart und Spezifikation zum Fahrzeug passen. Ob weitere fahrzeugspezifische Schritte erforderlich sind, wird vorab geklärt.",
    next: "Teilen Sie mit, wie lange das Fahrzeug stand und ob es bereits Starthilfe brauchte. Bei Fragen zu Hochvoltbatterien von Hybrid- oder Elektrofahrzeugen klären Sie den möglichen Umfang bitte ausdrücklich vorab.",
    related: ["fahrzeugdiagnose", "fehlerauslesen", "inspektion"],
  },
  {
    slug: "getriebe",
    title: "Getriebe",
    description: "Getriebeservice in Frankfurt-Schwanheim: Schaltprobleme, Geräusche und Undichtigkeiten einordnen. Kontakt zu Autodienst Schwanheim.",
    intro: "Das Getriebe passt Drehzahl und Drehmoment an die Fahrsituation an. Wenn sich Schalten oder Kraftübertragung verändern, ist eine gezielte Prüfung sinnvoll.",
    purpose: "Schalt- und Automatikgetriebe unterscheiden sich im Aufbau und in ihren Wartungsvorgaben. Auffälligkeiten können auch mit Kupplung, Betätigung, Antrieb oder Steuerung zusammenhängen. Eine pauschale Reparaturempfehlung ohne Prüfung wäre deshalb wenig hilfreich.",
    signs: ["Gänge lassen sich schwer oder nicht zuverlässig einlegen.", "Beim Schalten treten ungewöhnliche Rucke oder Geräusche auf.", "Am Getriebebereich sind Flüssigkeitsspuren zu erkennen."],
    checks: "Bei der Eingrenzung werden Bauart, Wartungshistorie und die genaue Fahrsituation berücksichtigt. Sichtprüfung, Betätigung und gegebenenfalls gespeicherte Meldungen können Hinweise liefern. Ölprüfungen und Wechselarbeiten richten sich nach den Vorgaben des konkreten Getriebes.",
    next: "Nennen Sie, ob das Problem kalt oder warm, beim Anfahren oder bei bestimmten Gangwechseln auftritt. Art und Umfang möglicher Arbeiten werden mit Autodienst Schwanheim am konkreten Fahrzeug abgestimmt.",
    related: ["fahrzeugdiagnose", "fehlerauslesen", "inspektion"],
  },
  {
    slug: "klima-check",
    title: "Klima-Check",
    description: "Klima-Check in Frankfurt-Schwanheim: Kühlleistung, Gerüche und Luftstrom prüfen lassen. Persönliche Abstimmung bei Autodienst Schwanheim.",
    intro: "Eine funktionierende Klimaanlage sorgt für angenehme Temperaturen und unterstützt das Entfeuchten der Innenraumluft. Ein Klima-Check hilft, Veränderungen ihrer Funktion einzuordnen.",
    purpose: "Schwache Kühlung kann unterschiedliche Ursachen haben. Auch ein eingeschränkter Luftstrom oder ein zugesetzter Innenraumfilter verändert den Eindruck der Klimaleistung. Gerüche brauchen eine eigene Betrachtung und bedeuten nicht automatisch Kältemittelmangel.",
    signs: ["Die Luft wird trotz eingeschalteter Klimaanlage kaum kühl.", "Ungewohnte Gerüche treten beim Einschalten auf.", "Luftstrom oder Geräusch der Anlage haben sich verändert."],
    checks: "Grundsätzlich können Bedienung, Luftverteilung, Temperaturverhalten und sichtbare Komponenten geprüft werden. Weitere Schritte hängen vom Fahrzeug, dem Kältemitteltyp und dem Befund ab. Eine bloße Befüllung ersetzt bei einer Undichtigkeit nicht die Ursachenklärung.",
    next: "Beschreiben Sie, ob die Veränderung plötzlich oder langsam aufgetreten ist und ob die Kühlung zeitweise funktioniert. Autodienst Schwanheim bespricht mit Ihnen die passende Prüfung.",
    related: ["luft-und-innenraumfilter", "inspektion", "fahrzeugdiagnose"],
  },
  {
    slug: "luft-und-innenraumfilter",
    title: "Austausch von Luft- und Innenraumfiltern",
    description: "Luft- und Innenraumfilter wechseln in Frankfurt-Schwanheim: Unterschiede, Wechselbedarf und Hinweise von Autodienst Schwanheim verständlich erklärt.",
    intro: "Motorluftfilter und Innenraumfilter haben unterschiedliche Aufgaben. Der eine filtert die angesaugte Motorluft, der andere die Luft, die über die Lüftung in den Innenraum gelangt.",
    purpose: "Ein zugesetzter Motorluftfilter kann die Luftversorgung beeinträchtigen. Ein verschmutzter Innenraumfilter kann den Luftstrom verringern. Wechselbedarf und geeignete Filter richten sich nach Fahrzeugvorgaben und Einsatzbedingungen, etwa einer staubigen Umgebung.",
    signs: ["Das vorgesehene Wechselintervall ist erreicht.", "Aus den Lüftungsdüsen kommt weniger Luft als gewohnt.", "Die Filter wurden lange nicht gewechselt oder ihre Historie ist unklar."],
    checks: "Beim Wechsel werden der passende Filtertyp und sein korrekter Sitz beachtet. Zugängliche Gehäusebereiche werden auf Verschmutzung und Auffälligkeiten angesehen. Gerüche oder beschlagene Scheiben können zusätzliche Ursachen haben und sind nicht in jedem Fall allein durch einen neuen Filter behoben.",
    next: "Geben Sie an, ob es um die Motorluft oder den Innenraum geht und welche Auffälligkeiten bestehen. Der passende Austausch kann mit Autodienst Schwanheim auch im Zusammenhang mit einer Inspektion abgestimmt werden.",
    related: ["klima-check", "inspektion", "oelwechsel"],
  },
];

export const servicesByTitle = Object.fromEntries(services.map(service => [service.title, service]));
export const servicesBySlug = Object.fromEntries(services.map(service => [service.slug, service]));

export const serviceGroups: { title: string; icon: IconName; description: string; services: string[] }[] = [
  {
    title: "Wartung und Inspektion",
    icon: "wrench",
    description:
      "Regelmäßige Arbeiten für Werterhalt, Zuverlässigkeit und eine klare Einschätzung des Fahrzeugzustands.",
    services: ["TÜV & AU-Service", "Inspektion", "Ölwechsel"],
  },
  {
    title: "Diagnose und Elektronik",
    icon: "scan",
    description:
      "Systematische Prüfung elektronischer Fahrzeugsysteme mit nachvollziehbarer Diagnose.",
    services: ["Fahrzeugdiagnose", "Fehlerauslesen", "Motordiagnose"],
  },
  {
    title: "Reifen und Fahrwerk",
    icon: "wheel",
    description:
      "Service rund um Reifen, Räder und die präzise Ausrichtung des Fahrwerks.",
    services: ["Reifenservice", "Radeinstellung"],
  },
  {
    title: "Motor und Getriebe",
    icon: "engine",
    description:
      "Gezielte Prüfung und Arbeiten an zentralen Komponenten des Antriebsstrangs.",
    services: ["Batterie und Akku", "Getriebe"],
  },
  {
    title: "Bremsen und Abgasanlage",
    icon: "brake",
    description:
      "Kontrolle und Service an sicherheitsrelevanten Komponenten und der Abgasanlage.",
    services: ["Bremsenservice", "Auspuff"],
  },
  {
    title: "Klima und Filter",
    icon: "snow",
    description:
      "Für Luftqualität, Komfort und funktionierende Klimatisierung im Fahrzeug.",
    services: ["Klima-Check", "Austausch von Luft- und Innenraumfiltern"],
  },
];
